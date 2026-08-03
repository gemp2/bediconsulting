"use client";

import { useEffect, useRef } from "react";
import maplibregl, { type Map as MlMap, type Marker } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { typeColors, type Project } from "@/data/projects";

// Light, clean basemap.
const BASEMAP = "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";

type Props = {
  projects: Project[];
  selectedId?: number | null;
  onSelect?: (p: Project) => void;
  className?: string;
};

export function ProjectMap({
  projects,
  selectedId,
  onSelect,
  className = "",
}: Props) {
  const container = useRef<HTMLDivElement>(null);
  const map = useRef<MlMap | null>(null);
  const markers = useRef<Map<number, Marker>>(new Map());
  // Kept in a ref so marker click handlers always see the current callback
  // without needing to tear down and rebuild every marker on each render.
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;
  // Only one popup open at a time.
  const openPopup = useRef<import("maplibre-gl").Popup | null>(null);

  useEffect(() => {
    if (!container.current || map.current) return;

    map.current = new maplibregl.Map({
      container: container.current,
      style: BASEMAP,
      center: [20, 15],
      zoom: 1.4,
      minZoom: 1,
      maxZoom: 16,
      attributionControl: { compact: true },
    });

    map.current.addControl(
      new maplibregl.NavigationControl({ showCompass: false }),
      "top-right",
    );

    return () => {
      map.current?.remove();
      map.current = null;
      markers.current.clear();
    };
  }, []);

  // Sync markers with the filtered project list.
  useEffect(() => {
    if (!map.current) return;
    const visible = new Set(projects.map((p) => p.id));

    for (const [id, marker] of markers.current) {
      if (!visible.has(id)) {
        marker.remove();
        markers.current.delete(id);
      }
    }

    for (const project of projects) {
      if (markers.current.has(project.id)) continue;

      const el = document.createElement("button");
      el.type = "button";
      el.setAttribute("aria-label", project.name);
      el.style.cssText = `width:14px;height:14px;border-radius:9999px;cursor:pointer;border:2px solid ${
        typeColors[project.type]
      };background:${typeColors[project.type]}40;transition:transform .15s`;

      const href = project.caseStudy
        ? `/projects/${project.slug}`
        : "/projects";
      const popup = new maplibregl.Popup({
        offset: 16,
        closeButton: true,
        maxWidth: "260px",
      }).setHTML(
        `<div style="font-family:sans-serif;padding:4px 6px 6px">
           <span style="display:block;font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:${typeColors[project.type]}">${escapeHtml(project.type)}</span>
           <strong style="display:block;margin-top:3px;font-size:13px;color:#06090f">${escapeHtml(project.name)}</strong>
           <span style="display:block;margin-top:2px;font-size:11px;color:#555">${escapeHtml(project.location)} · ${project.year}</span>
           <a href="${href}" style="display:inline-block;margin-top:9px;font-size:11px;font-weight:600;color:#f7941e;text-decoration:none">More detail →</a>
         </div>`,
      );

      const marker = new maplibregl.Marker({ element: el })
        .setLngLat([project.lng, project.lat])
        .setPopup(popup)
        .addTo(map.current);

      el.addEventListener("click", (e) => {
        e.stopPropagation();
        // Close any other open popup first.
        if (openPopup.current && openPopup.current !== popup) {
          openPopup.current.remove();
        }
        marker.togglePopup();
        openPopup.current = popup.isOpen() ? popup : null;
        onSelectRef.current?.(project);
      });

      markers.current.set(project.id, marker);
    }
  }, [projects]);

  // Fly to the externally-selected project.
  useEffect(() => {
    if (!map.current || selectedId == null) return;
    const project = projects.find((p) => p.id === selectedId);
    if (!project) return;
    map.current.flyTo({
      center: [project.lng, project.lat],
      zoom: 6,
      duration: 1200,
    });
  }, [selectedId, projects]);

  return <div ref={container} className={className} />;
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (c) =>
      (
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        }) as Record<string, string>
      )[c]!,
  );
}
