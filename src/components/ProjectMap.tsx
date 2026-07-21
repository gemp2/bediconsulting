"use client";

import { useEffect, useRef } from "react";
import maplibregl, { type Map as MlMap, type Marker } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { typeColors, type Project } from "@/data/projects";

const BASEMAP =
  "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";

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
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        onSelectRef.current?.(project);
      });

      const popup = new maplibregl.Popup({
        offset: 16,
        closeButton: false,
      }).setHTML(
        `<div style="font-family:sans-serif;padding:2px 4px">
           <strong style="display:block;font-size:12px;color:#06090f">${escapeHtml(project.name)}</strong>
           <span style="font-size:11px;color:#444">${escapeHtml(project.location)} · ${project.year}</span>
         </div>`,
      );

      markers.current.set(
        project.id,
        new maplibregl.Marker({ element: el })
          .setLngLat([project.lng, project.lat])
          .setPopup(popup)
          .addTo(map.current),
      );
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
