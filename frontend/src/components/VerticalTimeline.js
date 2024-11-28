import React from 'react';

const timelinePoints = [
    { label: "Septembre 2022 - Septembre 2024", offset: 50 }, // Premier point à 50px du haut
    { label: "Avril 2022 - Juillet 2022", offset: 200 }, // Deuxième point à 200px du haut
  ];
  

const VerticalTimeline = ({ points }) => {
    return (
      <div className="relative flex flex-col items-center w-10">
        {/* Barre verticale */}
        <div className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-[#1A2443] to-gray-700"></div>
  
        {/* Points sur la barre */}
        {points.map((point, index) => (
          <div
            key={index}
            className="absolute z-10 w-6 h-6 bg-white rounded-full border-4 border-[#1A2443]"
            title={point.label}
            style={{ top: `${point.offset}px` }} 
          ></div>
        ))}
      </div>
    );
  };

export default VerticalTimeline;
