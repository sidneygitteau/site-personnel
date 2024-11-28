import React from 'react';

const projects = [
  {
    title: 'Evnts',
    description:
      "Dans le cadre de la M2 MIAGE, projet Java SPRING et Angular où nous avons décidé de créer une application de création d'évenements. Un utilisateur peut s'authentifier, se connecter, creer des evenements que les autres peuvent rejoindre pour s'organiser etc... ",
    technologies: 'Java, Angular, API REST, SQL, Google Auth',
    link: 'https://github.com/sidneygitteau/evnts',
  },
  {
    title: 'QueensGameRemake',
    description:
      "Inspiré par le jeu LinkedIn Queens, petit projet personnel se basant sur LibGDX. Non terminé.",
    technologies: 'Java, LibGDX, HTML, CSS',
    link: 'https://github.com/sidneygitteau/queensgameremake',
  },
  {
    title: 'OCR Sprint',
    description:
      "Projet réalisé par groupe dans le cadre de la M2 MIAGE à l'université d'Orléans. Dans un temps réduit, l'objectif était de créer une innovation dans le monde de l'assurance. Nous avons développé un projet novateur se basant sur l'OCR, où en renseignant un permis ou une carte grise, nous pouvons reccueillir les informations importantes de l'adhérent dans un json.",
    technologies: 'Java, PHP, Docker, HTML, CSS',
    link: 'https://github.com/sidneygitteau/ocr-sprint',
  },
  {
    title: 'Site Personnel',
    description:
      'Création d\'un site personnel afin de me présenter. C\'est ce site que vous visitez actuellement',
    technologies: 'JavaScript, React, Node.js, GIT, MongoDB, HTML, CSS',
    link: 'https://github.com/sidneygitteau/site-personnel',
  },
];

const Projets = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-[#212E53] text-white font-sans relative">
      {/* Animation de fond */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#212E53] to-black opacity-40 animate-gradient blur-lg"></div>

      <div className="relative z-10 space-y-24 px-8 py-12 pt-20">
        {/* Titre principal */}
        <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-white">Mes Projets</h1>
          {/*
          <p className="text-lg text-white-400 mt-2">
            Découvrez mes projets et explorations personnelles en développement :
          </p>*/}
          
        </div>

        {/* lien vers GitHub perso */}
        <div className="text-center mb-6">
          <a
            href="https://github.com/sidneygitteau"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 text-lg font-semibold"
          >
            Cliquez ici pour accéder directement à mon GitHub
          </a>
        </div>

        {/* Liste des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1A2443] to-black rounded-lg shadow-lg p-6 min-h-[200px] relative group hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-6">{project.description}</p>
              <p className="text-sm text-blue-400 font-semibold absolute bottom-4 left-4">
                Technologies : {project.technologies}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition duration-300"
              >
                Voir sur GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projets;
