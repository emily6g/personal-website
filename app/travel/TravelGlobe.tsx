"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { geoDistance, geoGraticule10, geoOrthographic, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { FeatureCollection } from "geojson";
import type { GeometryCollection, Topology } from "topojson-specification";
import worldData from "world-atlas/countries-110m.json";

const locations = [
  { name: "Israel", coordinates: [35.21, 31.77] as [number, number] },
  { name: "Colorado", coordinates: [-105.5, 39] as [number, number] },
  { name: "New York", coordinates: [-74.01, 40.71] as [number, number] },
  { name: "Costa Rica", coordinates: [-83.75, 9.75] as [number, number] },
  { name: "Guatemala", coordinates: [-90.23, 15.78] as [number, number] },
  { name: "Haiti", coordinates: [-72.29, 18.97] as [number, number] },
  { name: "Jamaica", coordinates: [-77.3, 18.11] as [number, number] },
  { name: "The Bahamas", coordinates: [-77.4, 25.03] as [number, number] },
  { name: "Spain", coordinates: [-3.75, 40.46] as [number, number] },
  { name: "Hawaii", coordinates: [-156.33, 20.8] as [number, number] },
  { name: "Florida", coordinates: [-81.52, 27.66] as [number, number] },
  { name: "Washington", coordinates: [-120.74, 47.4] as [number, number] },
  { name: "Oregon", coordinates: [-120.55, 43.8] as [number, number] },
  { name: "Oklahoma", coordinates: [-97.52, 35.47] as [number, number] },
  { name: "Texas", coordinates: [-99.9, 31.97] as [number, number] },
  { name: "California", coordinates: [-119.42, 36.78] as [number, number] },
  { name: "Utah", coordinates: [-111.09, 39.32] as [number, number] },
  { name: "Alaska", coordinates: [-149.49, 64.2] as [number, number] },
  { name: "Mexico", coordinates: [-102.55, 23.63] as [number, number] },
  { name: "Italy", coordinates: [12.57, 41.87] as [number, number] },
  { name: "Germany", coordinates: [10.45, 51.17] as [number, number] },
  { name: "Ukraine", coordinates: [31.17, 48.38] as [number, number] },
];

const topology = worldData as unknown as Topology;
const countries = feature(
  topology,
  topology.objects.countries as GeometryCollection,
) as FeatureCollection;

export default function TravelGlobe() {
  const [rotation, setRotation] = useState(96);
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  const [interacting, setInteracting] = useState(false);
  const drag = useRef<{ x: number; rotation: number } | null>(null);

  const projection = useMemo(
    () => geoOrthographic().translate([320, 320]).scale(286).rotate([rotation, -12]).clipAngle(90).precision(.25),
    [rotation],
  );
  const path = useMemo(() => geoPath(projection), [projection]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || interacting) return;

    let frame = 0;
    let previous = performance.now();
    const rotate = (now: number) => {
      const elapsed = Math.min(now - previous, 40);
      previous = now;
      setRotation((value) => (value + elapsed * .0025) % 360);
      frame = requestAnimationFrame(rotate);
    };
    frame = requestAnimationFrame(rotate);
    return () => cancelAnimationFrame(frame);
  }, [interacting]);

  const beginDrag = (event: React.PointerEvent<SVGSVGElement>) => {
    drag.current = { x: event.clientX, rotation };
    event.currentTarget.setPointerCapture(event.pointerId);
    setInteracting(true);
  };

  const moveGlobe = (event: React.PointerEvent<SVGSVGElement>) => {
    if (!drag.current) return;
    setRotation(drag.current.rotation + (event.clientX - drag.current.x) * .32);
  };

  const endDrag = (event: React.PointerEvent<SVGSVGElement>) => {
    drag.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    setInteracting(false);
  };

  return (
    <section className="globe-section" aria-labelledby="globe-title">
      <div className="globe-copy">
        <p className="eyebrow">Places I have explored</p>
        <h2 id="globe-title">A world of favorite memories.</h2>
        <p>Drag to rotate the globe. Hover, focus, or tap a pin to see the destination.</p>
      </div>

      <div className="globe-stage" onMouseEnter={() => setInteracting(true)} onMouseLeave={() => { setInteracting(false); setActiveLocation(null); }}>
        <svg
          className="travel-globe"
          viewBox="0 0 640 640"
          role="img"
          aria-label="Interactive globe showing places Emily has visited"
          onPointerDown={beginDrag}
          onPointerMove={moveGlobe}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          <path className="globe-ocean" d={path({ type: "Sphere" }) || ""} />
          <path className="globe-grid" d={path(geoGraticule10()) || ""} />
          <g className="globe-land">
            {countries.features.map((country, index) => <path d={path(country) || ""} key={index} />)}
          </g>
          <path className="globe-outline" d={path({ type: "Sphere" }) || ""} />

          <g className="globe-pins">
            {locations.map((location) => {
              const center: [number, number] = [-rotation, 12];
              const visible = geoDistance(location.coordinates, center) < Math.PI / 2;
              const point = projection(location.coordinates);
              if (!visible || !point) return null;
              const selected = activeLocation === location.name;
              const labelWidth = Math.max(72, location.name.length * 7.4 + 24);
              return (
                <g
                  className={`globe-pin${selected ? " is-active" : ""}`}
                  transform={`translate(${point[0]} ${point[1]})`}
                  role="button"
                  tabIndex={0}
                  aria-label={location.name}
                  onPointerDown={(event) => event.stopPropagation()}
                  onMouseEnter={() => setActiveLocation(location.name)}
                  onMouseLeave={() => setActiveLocation(null)}
                  onFocus={() => { setActiveLocation(location.name); setInteracting(true); }}
                  onBlur={() => { setActiveLocation(null); setInteracting(false); }}
                  onClick={() => setActiveLocation(selected ? null : location.name)}
                  key={location.name}
                >
                  <circle className="globe-pin-ring" r="9" />
                  <circle className="globe-pin-dot" r="4" />
                  {selected && <g className="globe-pin-label" transform="translate(0 -18)">
                    <rect x={-labelWidth / 2} y="-29" width={labelWidth} height="27" rx="13.5" />
                    <text textAnchor="middle" y="-11">{location.name}</text>
                  </g>}
                </g>
              );
            })}
          </g>
        </svg>
        <div className="globe-control-note" aria-hidden="true"><span>↔</span> Drag to explore</div>
      </div>
    </section>
  );
}
