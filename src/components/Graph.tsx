import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const DraggableCircle: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      const svg = d3.select(svgRef.current);

      // Set initial circle position
      const initialX = 100;
      const initialY = 100;

      // Create the circle
      const circle = svg
        .append('circle')
        .attr('r', 50)
        .attr('cx', initialX)
        .attr('cy', initialY)
        .attr('fill', 'steelblue')
        .call(d3.drag().on('drag', dragged));

      function dragged(event: any) {
        // Update circle position on drag
        circle.attr('cx', event.x).attr('cy', event.y);
      }
    }
  }, []);

  return (
    <svg ref={svgRef} width='100%' height='100%'>
      {/* Placeholder for circle */}
    </svg>
  );
};

export default DraggableCircle;
