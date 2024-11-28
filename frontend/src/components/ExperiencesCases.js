import React from 'react';

const ExperiencesCases = ({ title, location, date, details, logo }) => {
  return (
    <div className="relative flex items-start space-x-8">
      {/* Point et barre à gauche */}
      <div className="flex flex-col items-center">
        <div className="w-6 h-6 bg-white rounded-full border-4 border-[#1A2443] z-10"></div>
        <div className="w-1 bg-gradient-to-b from-[#1A2443] to-gray-700 flex-grow -mt-3"></div>
      </div>

      {/* Contenu principal */}
      <div className="bg-gradient-to-br from-[#1A2443] to-black rounded-lg shadow-lg p-6 flex-grow text-white relative">
        {logo && (
          <div className="absolute -top-8 -right-8 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
            <img src={logo} alt={`${location} logo`} className="h-12 w-12 object-contain" />
          </div>
        )}
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-lg font-semibold mb-1">{location}</p>
        <p className="text-sm text-gray-400 mb-4">{date}</p>
        <ul className="mt-4 space-y-2 list-disc list-inside">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperiencesCases;
