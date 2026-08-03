"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/* ── palette (light) ── */
const C = {
  orange: "#f7941e",
  blue: "#1971c2",
  green: "#2f9e44",
  red: "#e03131",
  ink: "#1a1a1a",
  muted: "#6b7280",
  grid: "#e5e7eb",
  gridSoft: "#f1f3f5",
  line: "#d1d5db",
};

/* ── math ── */
const R = (d: number) => (d * Math.PI) / 180;
const D = (r: number) => (r * 180) / Math.PI;
const pad3 = (n: number) =>
  String(Math.round(((n % 360) + 360) % 360)).padStart(3, "0");
const f1 = (n: number) => n.toFixed(1);
const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

type Vals = {
  trueDip: number;
  dipDir: number;
  appDip: number;
  tunAz: number;
  depth: number;
};
type Mode = "fwd" | "rev";
type Calc = {
  dip: number;
  dd: number;
  taz: number;
  dep: number;
  strike: number;
  alpha: number;
  appDip: number;
  dot: number;
  valid: boolean;
};

function compute(mode: Mode, v: Vals): Calc {
  const dd = v.dipDir,
    taz = v.tunAz,
    dep = v.depth;
  const strike = ((dd - 90) + 360) % 360;
  let alpha = ((taz - strike) + 360) % 360;
  if (alpha > 180) alpha = 360 - alpha;
  const dot =
    Math.sin(R(taz)) * Math.sin(R(dd)) + Math.cos(R(taz)) * Math.cos(R(dd));
  if (mode === "fwd") {
    const dip = v.trueDip;
    const appDip = D(Math.atan(Math.tan(R(dip)) * Math.abs(Math.sin(R(alpha)))));
    return { dip, dd, taz, dep, strike, alpha, appDip, dot, valid: true };
  }
  const appDip = v.appDip;
  const sinA = Math.abs(Math.sin(R(alpha)));
  let dip = 0,
    valid = true;
  if (sinA < 0.02) {
    valid = false;
  } else {
    dip = clamp(D(Math.atan(Math.tan(R(appDip)) / sinA)), 0, 90);
  }
  return { dip, dd, taz, dep, strike, alpha, appDip, dot, valid };
}

/* ── plan-view svg (light) ── */
function planSvg(v: Calc): string {
  const cx = 150,
    cy = 150,
    r = 120;
  const xy = (az: number, len: number) => ({
    x: cx + len * Math.sin(R(az)),
    y: cy - len * Math.cos(R(az)),
  });
  const arrow = (tip: { x: number; y: number }, az: number, hw = 6, hl = 11) => {
    const a = R(az);
    return (
      `${tip.x},${tip.y} ` +
      `${tip.x - hl * Math.sin(a) + hw * Math.cos(a)},${tip.y + hl * Math.cos(a) + hw * Math.sin(a)} ` +
      `${tip.x - hl * Math.sin(a) - hw * Math.cos(a)},${tip.y + hl * Math.cos(a) - hw * Math.sin(a)}`
    );
  };
  const t = (x: number, y: number, s: string, fill: string, size = 11) =>
    `<text x="${x}" y="${y}" text-anchor="middle" fill="${fill}" font-size="${size}" font-family="Arial" font-weight="600">${s}</text>`;
  let h = "";
  h += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#fff" stroke="${C.line}" stroke-width="1.5"/>`;
  h += `<circle cx="${cx}" cy="${cy}" r="${r * 0.5}" fill="none" stroke="${C.grid}" stroke-width="1" stroke-dasharray="4 3"/>`;
  h += `<line x1="${cx}" y1="${cy - r}" x2="${cx}" y2="${cy + r}" stroke="${C.gridSoft}" stroke-width="1"/>`;
  h += `<line x1="${cx - r}" y1="${cy}" x2="${cx + r}" y2="${cy}" stroke="${C.gridSoft}" stroke-width="1"/>`;
  [
    { a: 0, l: "N" },
    { a: 90, l: "E" },
    { a: 180, l: "S" },
    { a: 270, l: "W" },
  ].forEach((c) => {
    const p = xy(c.a, r + 14);
    h += t(p.x, p.y + 4, c.l, C.muted, 12);
  });
  // strike
  const s1 = xy(v.strike, r * 0.9),
    s2 = xy((v.strike + 180) % 360, r * 0.9);
  h += `<line x1="${s1.x}" y1="${s1.y}" x2="${s2.x}" y2="${s2.y}" stroke="${C.blue}" stroke-width="2" stroke-dasharray="9 5"/>`;
  const sl = xy(v.strike, r * 0.66);
  h += t(sl.x, sl.y, "STRIKE", C.blue, 10);
  // dip dir
  const d1 = xy(v.dd, r * 0.82);
  h += `<line x1="${cx}" y1="${cy}" x2="${d1.x}" y2="${d1.y}" stroke="${C.orange}" stroke-width="3"/>`;
  h += `<polygon points="${arrow(d1, v.dd)}" fill="${C.orange}"/>`;
  const dl = xy(v.dd, r * 0.58);
  h += t(dl.x, dl.y, "DIP", C.orange, 10);
  h += t(dl.x, dl.y + 12, `${pad3(v.dd)}°`, C.orange, 10);
  // tunnel
  const tn1 = xy(v.taz, r * 0.88),
    tn2 = xy((v.taz + 180) % 360, r * 0.88);
  h += `<line x1="${tn1.x}" y1="${tn1.y}" x2="${tn2.x}" y2="${tn2.y}" stroke="${C.green}" stroke-width="2.5"/>`;
  h += `<polygon points="${arrow(tn1, v.taz, 5, 10)}" fill="${C.green}"/>`;
  const tl = xy(v.taz, r * 0.7);
  h += t(tl.x, tl.y, "TUNNEL", C.green, 10);
  h += t(tl.x, tl.y + 12, `${pad3(v.taz)}°`, C.green, 10);
  // alpha arc
  const arcR = 32;
  const as = xy(v.strike, arcR),
    ae = xy(v.taz, arcR);
  const diff = ((v.taz - v.strike) + 360) % 360;
  const sweep = diff <= 180 ? 1 : 0;
  h += `<path d="M ${as.x} ${as.y} A ${arcR} ${arcR} 0 0 ${sweep} ${ae.x} ${ae.y}" fill="none" stroke="${C.orange}" stroke-width="1.2" stroke-dasharray="3 2" opacity=".7"/>`;
  const mid = xy(v.strike + (diff <= 180 ? diff / 2 : diff / 2 + 180), arcR + 15);
  h += t(mid.x, mid.y + 3, `α=${Math.round(v.alpha)}°`, C.orange, 10);
  h += `<circle cx="${cx}" cy="${cy}" r="3.5" fill="${C.orange}"/>`;
  return h;
}

/* ── section svg (light) ── */
function sectionSvg(v: Calc, mode: Mode): string {
  const W = 300,
    H = 260,
    mg = 30,
    dW = W - 2 * mg,
    dH = H - 2 * mg;
  const surfY = mg + dH * 0.08;
  const tun3 = surfY + (v.dep / 200) * dH;
  const tunYc = Math.min(mg + dH * 0.9, Math.max(surfY + 20, tun3));
  const tX = mg + dW * 0.05,
    tW = dW * 0.9,
    tH = 18;
  const t = (x: number, y: number, s: string, fill: string, size = 10, anchor = "start") =>
    `<text x="${x}" y="${y}" text-anchor="${anchor}" fill="${fill}" font-size="${size}" font-family="Arial" font-weight="600">${s}</text>`;
  let h = "";
  // sky + ground
  h += `<rect x="${mg}" y="${mg}" width="${dW}" height="${surfY - mg}" fill="#fbfcfd"/>`;
  h += `<rect x="${mg}" y="${surfY}" width="${dW}" height="${mg + dH - surfY}" fill="#eef1f4"/>`;
  h += `<line x1="${mg}" y1="${surfY}" x2="${mg + dW}" y2="${surfY}" stroke="${C.green}" stroke-width="2"/>`;
  h += t(mg + 4, surfY - 5, "SURFACE", C.green, 9.5);
  // depth
  const midX = tX + tW / 2;
  h += `<line x1="${midX}" y1="${surfY}" x2="${midX}" y2="${tunYc}" stroke="${C.line}" stroke-width="1" stroke-dasharray="5 3"/>`;
  h += t(midX + 5, surfY + (tunYc - surfY) * 0.5, `${v.dep}m`, C.muted, 9.5);
  // tunnel
  h += `<rect x="${tX}" y="${tunYc - tH / 2}" width="${tW}" height="${tH}" fill="#fff" stroke="${C.line}" stroke-width="1.5" rx="2"/>`;
  h += `<ellipse cx="${tX + tW}" cy="${tunYc}" rx="4.5" ry="${tH / 2 - 1}" fill="#f8f9fa" stroke="${C.line}"/>`;
  h += t(tX + tW / 2, tunYc + 3.5, "TUNNEL", "#adb5bd", 8, "middle");
  // apparent plane
  const sign = v.dot >= 0 ? 1 : -1;
  const halfL = tW * 0.47;
  const dy = Math.tan(R(v.appDip)) * halfL * sign;
  const lx1 = tX + tW * 0.03,
    ly1 = tunYc - dy,
    lx2 = tX + tW * 0.97,
    ly2 = tunYc + dy;
  h += `<line x1="${lx1}" y1="${ly1}" x2="${lx2}" y2="${ly2}" stroke="${C.orange}" stroke-width="3"/>`;
  const mx = (lx1 + lx2) / 2,
    my = (ly1 + ly2) / 2,
    ar = 22;
  const sweep2 = sign > 0 ? 0 : 1;
  const ax3 = mx + ar * Math.cos(-R(v.appDip) * sign),
    ay3 = my + ar * Math.sin(-R(v.appDip) * sign);
  if (v.appDip > 1) {
    h += `<path d="M ${mx + ar} ${my} A ${ar} ${ar} 0 0 ${sweep2} ${ax3} ${ay3}" fill="none" stroke="${C.orange}" stroke-width="1.2"/>`;
  }
  h += `<line x1="${mx}" y1="${my}" x2="${mx + ar}" y2="${my}" stroke="${C.orange}" stroke-width="1" opacity=".5"/>`;
  h += t(mx + ar + 3, my - sign * 8, `${f1(v.appDip)}°`, C.orange, 11);
  if (mode === "rev") {
    h += t(tX + tW * 0.03, tunYc - tH / 2 - 6, `TRUE DIP: ${f1(v.dip)}°`, C.red, 9.5);
  }
  h += t(mg, mg + dH + 16, `← ${pad3(v.taz + 180)}°`, C.muted, 9.5);
  h += t(mg + dW, mg + dH + 16, `${pad3(v.taz)}° →`, C.muted, 9.5, "end");
  return h;
}

/* ── inputs config ── */
const FIELDS: Record<
  string,
  { label: string; min: number; max: number; unit: string; key: keyof Vals }
> = {
  trueDip: { label: "True dip", min: 0, max: 90, unit: "°", key: "trueDip" },
  appDip: { label: "Apparent dip", min: 0, max: 89, unit: "°", key: "appDip" },
  dipDir: { label: "Dip direction", min: 0, max: 359, unit: "°", key: "dipDir" },
  tunAz: { label: "Tunnel azimuth", min: 0, max: 359, unit: "°", key: "tunAz" },
  depth: { label: "Tunnel depth", min: 5, max: 200, unit: "m", key: "depth" },
};

export function ApparentDipTool() {
  const [mode, setMode] = useState<Mode>("fwd");
  const [vals, setVals] = useState<Vals>({
    trueDip: 30,
    dipDir: 45,
    appDip: 20,
    tunAz: 90,
    depth: 50,
  });

  const calc = useMemo(() => compute(mode, vals), [mode, vals]);
  const plan = useMemo(() => planSvg(calc), [calc]);
  const section = useMemo(() => sectionSvg(calc, mode), [calc, mode]);

  const set = (key: keyof Vals, raw: number) => {
    const f = Object.values(FIELDS).find((x) => x.key === key)!;
    setVals((s) => ({ ...s, [key]: clamp(raw, f.min, f.max) }));
  };

  const fields = mode === "fwd"
    ? (["trueDip", "dipDir", "tunAz", "depth"] as const)
    : (["appDip", "dipDir", "tunAz", "depth"] as const);

  /* ── 3D ── */
  const mount = useRef<HTMLDivElement>(null);
  const rebuildRef = useRef<((c: Calc) => void) | null>(null);

  useEffect(() => {
    let renderer: import("three").WebGLRenderer | null = null;
    let frame = 0;
    let disposed = false;
    let controls: { update: () => void; dispose: () => void } | null = null;

    (async () => {
      const THREE = await import("three");
      const { OrbitControls } = await import(
        "three/examples/jsm/controls/OrbitControls.js"
      );
      if (disposed || !mount.current) return;
      const cont = mount.current;
      const W = cont.clientWidth,
        H = cont.clientHeight || 360;
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xf4f5f7);
      const camera = new THREE.PerspectiveCamera(42, W / H, 0.1, 100);
      camera.position.set(9, 7, 12);
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(W, H);
      renderer.localClippingEnabled = true;
      cont.appendChild(renderer.domElement);
      scene.add(new THREE.AmbientLight(0xffffff, 0.85));
      const dl = new THREE.DirectionalLight(0xffffff, 0.7);
      dl.position.set(6, 10, 8);
      scene.add(dl);
      const BOX = 6;
      const grid = new THREE.GridHelper(12, 12, 0xced4da, 0xe9ecef);
      grid.position.y = -BOX / 2;
      scene.add(grid);
      controls = new OrbitControls(camera, renderer.domElement);
      (controls as unknown as { enableDamping: boolean }).enableDamping = true;
      (controls as unknown as { minDistance: number }).minDistance = 5;
      (controls as unknown as { maxDistance: number }).maxDistance = 28;

      const dyn: import("three").Object3D[] = [];
      const rebuild = (v: Calc) => {
        dyn.forEach((o) => {
          scene.remove(o);
          const mesh = o as unknown as {
            geometry?: { dispose: () => void };
            material?: { dispose: () => void } | { dispose: () => void }[];
          };
          mesh.geometry?.dispose();
          if (Array.isArray(mesh.material))
            mesh.material.forEach((m) => m.dispose());
          else mesh.material?.dispose();
        });
        dyn.length = 0;
        const add = (o: import("three").Object3D) => {
          dyn.push(o);
          scene.add(o);
          return o;
        };
        const hw = BOX / 2 + 0.05;
        const clips = [
          new THREE.Plane(new THREE.Vector3(1, 0, 0), hw),
          new THREE.Plane(new THREE.Vector3(-1, 0, 0), hw),
          new THREE.Plane(new THREE.Vector3(0, 1, 0), hw),
          new THREE.Plane(new THREE.Vector3(0, -1, 0), hw),
          new THREE.Plane(new THREE.Vector3(0, 0, 1), hw),
          new THREE.Plane(new THREE.Vector3(0, 0, -1), hw),
        ];
        const bG = new THREE.BoxGeometry(BOX, BOX, BOX);
        add(
          new THREE.LineSegments(
            new THREE.EdgesGeometry(bG),
            new THREE.LineBasicMaterial({ color: 0xadb5bd }),
          ),
        );
        // tunnel
        const tAzR = R(v.taz);
        const tunDir = new THREE.Vector3(
          Math.sin(tAzR),
          0,
          -Math.cos(tAzR),
        ).normalize();
        const tunR = 0.34,
          tunLen = BOX * 1.6;
        const tunY = Math.max(
          -BOX / 2 + tunR + 0.05,
          Math.min(BOX / 2 - tunR - 0.05, BOX / 2 - (v.dep / 200) * BOX),
        );
        const yAx = new THREE.Vector3(0, 1, 0),
          qT = new THREE.Quaternion();
        if (Math.abs(tunDir.dot(yAx)) < 0.9999)
          qT.setFromUnitVectors(yAx, tunDir);
        const tun = add(
          new THREE.Mesh(
            new THREE.CylinderGeometry(tunR, tunR, tunLen, 28, 1, false),
            new THREE.MeshStandardMaterial({
              color: 0x868e96,
              clippingPlanes: clips,
            }),
          ),
        );
        tun.position.y = tunY;
        tun.setRotationFromQuaternion(qT);
        // plane
        const dipR = R(v.dip),
          ddR = R(v.dd);
        const pNorm = new THREE.Vector3(
          Math.sin(dipR) * Math.sin(ddR),
          Math.cos(dipR),
          -Math.sin(dipR) * Math.cos(ddR),
        ).normalize();
        const pG = new THREE.PlaneGeometry(BOX * 2, BOX * 2);
        const pM = add(
          new THREE.Mesh(
            pG,
            new THREE.MeshStandardMaterial({
              color: 0xf7941e,
              transparent: true,
              opacity: 0.4,
              side: THREE.DoubleSide,
              clippingPlanes: clips,
            }),
          ),
        );
        pM.position.y = tunY;
        const defN = new THREE.Vector3(0, 0, 1),
          qP = new THREE.Quaternion();
        if (Math.abs(defN.dot(pNorm)) > 0.9999) {
          if (defN.dot(pNorm) < 0)
            qP.setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI);
        } else qP.setFromUnitVectors(defN, pNorm);
        pM.setRotationFromQuaternion(qP);
        const pE = add(
          new THREE.LineSegments(
            new THREE.EdgesGeometry(pG),
            new THREE.LineBasicMaterial({ color: 0xf7941e }),
          ),
        );
        pE.position.y = tunY;
        pE.setRotationFromQuaternion(qP);
        // arrows on surface
        const orig = new THREE.Vector3(0, BOX / 2 + 0.05, 0);
        add(
          new THREE.ArrowHelper(
            new THREE.Vector3(Math.sin(ddR), 0, -Math.cos(ddR)),
            orig,
            2.2,
            0xf7941e,
            0.45,
            0.22,
          ),
        );
        add(
          new THREE.ArrowHelper(tunDir, orig, 2.6, 0x2f9e44, 0.45, 0.22),
        );
      };
      rebuildRef.current = rebuild;
      rebuild(compute(mode, vals));

      const loop = () => {
        frame = requestAnimationFrame(loop);
        controls?.update();
        renderer?.render(scene, camera);
      };
      loop();

      const onResize = () => {
        if (!mount.current || !renderer) return;
        const w = mount.current.clientWidth,
          hh = mount.current.clientHeight || 360;
        camera.aspect = w / hh;
        camera.updateProjectionMatrix();
        renderer.setSize(w, hh);
      };
      window.addEventListener("resize", onResize);
      (renderer as unknown as { _cleanup: () => void })._cleanup = () =>
        window.removeEventListener("resize", onResize);
    })();

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      controls?.dispose();
      rebuildRef.current = null;
      if (renderer) {
        (renderer as unknown as { _cleanup?: () => void })._cleanup?.();
        renderer.domElement.remove();
        renderer.dispose();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    rebuildRef.current?.(calc);
  }, [calc]);

  const dir = (() => {
    const fwd = pad3(calc.taz),
      bwd = pad3((calc.taz + 180) % 360);
    if (Math.abs(calc.dot) < 0.07)
      return { cls: C.blue, txt: "Max apparent dip (⊥ to drive)" };
    if (calc.dot > 0) return { cls: C.green, txt: `Dips into face (${fwd}°)` };
    return { cls: C.red, txt: `Dips toward portal (${bwd}°)` };
  })();

  return (
    <div className="border hairline bg-white">
      {/* header + mode toggle */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b hairline px-6 py-5">
        <div>
          <h3 className="text-xl text-bone">Tunnel Apparent Dip Converter</h3>
          <p className="mt-1 text-xs muted">
            Structural geology · tunnelling · free tool
          </p>
        </div>
        <div className="flex border hairline">
          {(["fwd", "rev"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.12em] transition-colors ${
                mode === m ? "bg-gold text-white" : "text-bone/60 hover:text-gold"
              }`}
            >
              {m === "fwd" ? "True → Apparent" : "Apparent → True"}
            </button>
          ))}
        </div>
      </div>

      {/* explanation on top */}
      <div className="border-b hairline bg-navy2/40 px-6 py-4">
        <p className="max-w-4xl text-sm leading-relaxed muted">
          The dip seen in a tunnel wall — the <strong className="text-bone">apparent dip</strong> —
          is the true dip projected onto the tunnel section, and depends on the angle
          between the tunnel axis and the plane&rsquo;s strike. Set the values below;
          the formula is{" "}
          <span className="font-mono text-bone">tan Ψ = tan α · sin δ</span>.
        </p>
      </div>

      {/* compact controls: inputs + results */}
      <div className="grid gap-px bg-[color:var(--hairline)] md:grid-cols-2">
        {/* inputs */}
        <div className="bg-white px-6 py-5">
          <p className="mb-4 text-[10px] uppercase tracking-[0.18em] text-gold">
            Inputs
          </p>
          <div className="space-y-3.5">
            {fields.map((k) => {
              const f = FIELDS[k];
              return (
                <div key={k} className="flex items-center gap-3">
                  <label className="w-28 shrink-0 text-xs text-bone/70">
                    {f.label}
                  </label>
                  <input
                    type="range"
                    min={f.min}
                    max={f.max}
                    value={vals[f.key]}
                    onChange={(e) => set(f.key, +e.target.value)}
                    className="h-1 flex-1 accent-[#f7941e]"
                  />
                  <input
                    type="number"
                    min={f.min}
                    max={f.max}
                    value={vals[f.key]}
                    onChange={(e) => set(f.key, +e.target.value)}
                    className="w-16 border hairline bg-white px-2 py-1 text-center font-mono text-sm text-bone focus:border-gold focus:outline-none"
                  />
                  <span className="w-3 text-xs muted">{f.unit}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* results */}
        <div className="bg-white px-6 py-5">
          <p className="mb-4 text-[10px] uppercase tracking-[0.18em] text-gold">
            Result
          </p>
          {mode === "rev" && !calc.valid ? (
            <p className="border border-red-300 bg-red-50 px-3 py-2 text-xs text-red-600">
              Tunnel nearly parallel to strike — true dip is indeterminate.
            </p>
          ) : (
            <div className="flex items-baseline gap-2">
              <span
                className="font-mono text-4xl font-bold"
                style={{ color: mode === "fwd" ? C.orange : C.ink }}
              >
                {mode === "fwd" ? f1(calc.appDip) : f1(calc.dip)}
              </span>
              <span className="text-lg muted">°</span>
              <span className="ml-1 text-xs muted">
                {mode === "fwd" ? "apparent dip" : "true dip"}
              </span>
            </div>
          )}
          <div className="mt-3 inline-flex items-center gap-2 text-xs" style={{ color: dir.cls }}>
            <span className="h-2 w-2 rounded-full" style={{ background: dir.cls }} />
            {dir.txt}
          </div>
          <dl className="mt-5 grid grid-cols-2 gap-4 border-t hairline pt-4">
            <div>
              <dt className="text-[10px] uppercase tracking-[0.12em] muted">Strike</dt>
              <dd className="mt-0.5 font-mono text-sm text-bone">{pad3(calc.strike)}°</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.12em] muted">
                Tunnel vs strike (δ)
              </dt>
              <dd className="mt-0.5 font-mono text-sm text-bone">{f1(calc.alpha)}°</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* the 3 graphs — given the most space */}
      <div className="grid gap-px border-t hairline bg-[color:var(--hairline)] lg:grid-cols-3">
        <figure className="bg-white p-4">
          <figcaption className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] muted">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: C.green }} />
            Plan view
          </figcaption>
          <svg
            viewBox="0 0 300 300"
            className="w-full"
            dangerouslySetInnerHTML={{ __html: plan }}
          />
        </figure>
        <figure className="bg-white p-4">
          <figcaption className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] muted">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: C.red }} />
            Longitudinal section
          </figcaption>
          <svg
            viewBox="0 0 300 260"
            className="w-full"
            dangerouslySetInnerHTML={{ __html: section }}
          />
        </figure>
        <figure className="bg-white p-4">
          <figcaption className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] muted">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: C.orange }} />
            3D view · drag to rotate
          </figcaption>
          <div ref={mount} className="h-[300px] w-full" />
        </figure>
      </div>
    </div>
  );
}
