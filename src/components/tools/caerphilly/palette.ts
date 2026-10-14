import type { Layer, Section } from "@/data/tools/caerphilly-demo";

/** Rating 0-3: low, medium, high, critical (concept dashboard legend). */
export const ratingColours = ["#2f9e44", "#f2c230", "#f08c00", "#e03131"];

/** Water class 0 = none, 1 = W5 ... 5 = W1 (most severe). */
export const waterColours = ["#e9ecef", "#d0ebff", "#a5d8ff", "#4dabf7", "#1c7ed6", "#0b4f9c"];

/** Defect severity 1-3 (1 = most severe). Index 0 unused. */
export const severityColours = ["", "#e03131", "#f08c00", "#f2c230"];

export function cellColour(layer: Layer, s: Section): string {
  if (layer === "water") return waterColours[s.water];
  return ratingColours[s.ratings[layer]];
}

export const fmt = (n: number) =>
  n >= 100 ? Math.round(n).toLocaleString("en-GB") : (Math.round(n * 10) / 10).toFixed(1);

export const chainageLabel = (s: Section) => `${s.from}-${s.to} m`;
