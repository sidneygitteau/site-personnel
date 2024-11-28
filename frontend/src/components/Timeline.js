import React, { useEffect, useRef, useState } from 'react';
import VerticalTimeline from './VerticalTimeline';
import ExperiencesCases from './ExperiencesCases';


//Composant qui utilise VerticalTimeline + experiencecases 
const Timeline = ({ experiences }) => {
  const [pointPositions, setPointPositions] = useState([]);
  const refs = useRef([]);

  useEffect(() => {
    // Calculer la position des points en fonction des rectangles
    const positions = refs.current.map((ref) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        return rect.top + rect.height / 2; // Position verticale du centre du rectangle
      }
      return 0;
    });
    setPointPositions(positions);
  }, []);

  return (
    <div className="relative flex">
      {/* Barre verticale */}
      <VerticalTimeline points={pointPositions} />

      {/* Liste des expériences */}
      <div className="space-y-12 flex-grow">
        {experiences.map((experience, index) => (
          <div
            key={index}
            ref={(el) => (refs.current[index] = el)} // Associe chaque expérience à son ref
            className="relative"
          >
            <ExperiencesCases
              title={experience.title}
              location={experience.location}
              date={experience.date}
              details={experience.details}
              logo={experience.logo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
