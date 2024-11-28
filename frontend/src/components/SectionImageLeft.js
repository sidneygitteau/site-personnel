import React from 'react';

const SectionImageLeft = ({ title, text, image, alt }) => (
  <div className="flex flex-col-reverse md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
    <div className="md:w-1/2 flex justify-center">
      <img
        src={image}
        alt={alt}
        className="rounded-lg shadow-lg h-[500px] w-auto transform hover:scale-105 transition duration-500"
      />
    </div>
    <div className="md:w-1/2 text-center md:text-left text-justify strong">
      {title && <h2 className="text-4xl font-bold mb-6">{title}</h2>}
      <p className="text-3xl leading-relaxed">{text}</p>
    </div>
  </div>
);

export default SectionImageLeft;
