import { useEffect, useState, useRef } from 'react';
import imageMapResize from 'image-map-resizer';
import MAP from './layoutmap.js';
import EquipmentTable from '../equipmentTable.jsx';

const FloorPlan = () => {
  const [hoveredZone, setHoveredZone] = useState(null);
  const imageRef = useRef(null);

  useEffect(() => {
    imageMapResize();
  }, []);

  // Utility to calculate centroid of polygon
  const getCentroid = (coords) => {
    const points = coords.reduce(
      (acc, val, i) => {
        if (i % 2 === 0) {acc.x.push(parseFloat(val))}
        else {acc.y.push(parseFloat(val))}
        return acc;
      },
      { x: [], y: [] }
    );

    const xAvg = points.x.reduce((a, b) => a + b, 0) / points.x.length;
    const yAvg = points.y.reduce((a, b) => a + b, 0) / points.y.length;

    return { x: xAvg, y: yAvg };
  };

  // Scale centroid coordinates from SVG to rendered image size
  const getCentroidScaled = (coords, svgWidth, svgHeight, renderedWidth, renderedHeight) => {
    const { x, y } = getCentroid(coords);
    return {
      x: (x / svgWidth) * renderedWidth,
      y: (y / svgHeight) * renderedHeight,
    };
  };

  return (
    <>
    <div className="relative w-full max-w-[1920px] mx-auto aspect-[1920/1080] flex">
      <div className="relative w-full h-full">
        <img
          ref={imageRef}
          src="/assets/floorplan.jpg"
          useMap="#image-map"
          alt="Floor Plan"
          className="absolute top-0 left-0 w-full h-full object-fit"
        />

        <svg
          viewBox="0 0 1980 1080"
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {MAP.areas.map((zone, index) => (
            <polygon
              key={index}
              points={zone.coords.join(' ')}
              className="cursor-pointer transition-all pointer-events-auto"
              style={{
                fill: hoveredZone?.name === zone.name ? zone.fillColor : zone.preFillColor,
                stroke: 'white',
                strokeWidth: '2px',
              }}
              onMouseEnter={() => setHoveredZone({ ...zone })}
              onMouseLeave={() => setHoveredZone(null)}
            />
          ))}
        </svg>

        {hoveredZone && imageRef.current && (() => {
          const renderedWidth = imageRef.current.clientWidth;
          const renderedHeight = imageRef.current.clientHeight;

          const { x, y } = getCentroidScaled(
            hoveredZone.coords,
            1980,
            1080, 
            renderedWidth,
            renderedHeight
          );

          return (
            <div
            className="absolute bg-white shadow-lg rounded-lg p-4 z-50 pointer-events-none max-w-xs"
            style={{
              left: `${x}px`,
              top: `${y}px`,
              transform: "translate(-50%, -110%)",
            }}
          >
            <h2 className="text-lg font-bold mb-2">{hoveredZone.info.title}</h2>
            <img
              src={hoveredZone.info.image}
              alt={hoveredZone.info.title}
              className="w-full h-auto rounded mb-2"
            />
            <p className="text-sm mb-2">{hoveredZone.info.description}</p>
            <ul className="list-disc list-inside text-xs">
              {hoveredZone.info.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        )
      })()}
      </div>
    </div>
    </>
  )
}

export default FloorPlan;
