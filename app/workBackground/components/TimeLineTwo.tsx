// src/components/Timeline.tsx
import React from 'react';

interface TimelineNode {
  title: string;
  initialDate: string;
  endDate: string;
  company: string;
}

interface TimelineProps {
  nodes: TimelineNode[];
}

export const TimelineTwo: React.FC<TimelineProps> = ({ nodes }) => {
  return (
    <div className="flex flex-col items-start">
      {nodes.map((node, index) => (
        <div key={index} className="relative p-4 border-l-2 border-solid border-gray-800 ml-4">
          <div className="max-w-xs">
            <h3 className="text-lg mb-2">{node.title}</h3>
            <p className="text-gray-700">{node.company}</p>
            {/* <p className="font-bold text-gray-600">{node.year}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};
