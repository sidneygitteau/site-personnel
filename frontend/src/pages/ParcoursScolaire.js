import React from 'react';
import ExperiencesCases from '../components/ExperiencesCases';
import VerticalTimeline from '../components/VerticalTimeline';

import OrléansLogo from '../assets/orleans-logo.png'; 

const ParcoursScolaire = () => {
  const parcours = [
    {
      title: "Master MIAGE - option SIMSAB (Systèmes d'Informations des Métiers du Social, des Assurances et de la Banque)",
      location: "Université d'Orléans",
      date: "2022 - 2024",
      details: [
        "Spécialisation en systèmes d'information pour les mutuelles, les assurances et les banques",
        "Développement d'applications robustes et innovantes adaptées aux besoins métiers",
        "Apprentissage de l'architecture des entreprises des secteurs bancaires et assurantiels",
        "Formation sur le système de protection sociale et le système de retraite français",
        "Gestion de projet informatique : méthodologies Agile et Scrum",
      ],
      logo: OrléansLogo,
    },
    {
      title: "Licence 3 MIAGE (Méthodes Informatique Apppliquées à la Gestion d'Entreprise)",
      location: "Université d'Orléans",
      date: "2021 - 2022",
      details: [
        "Introduction aux méthodes informatiques appliquées à la gestion",
        "Formation sur le développement d'applications web et desktop",
        "Bases solides en systèmes d'information, modélisation UML et programmation orientée objet",
        "Introduction aux systèmes d'exploitation et réseaux",
        "Travaux pratiques sur des projets collaboratifs, favorisant le travail en équipe",
      ],
      logo: OrléansLogo,
    },
    {
      title: "Licence 1 et 2 Informatique",
      location: "Université d'Orléans",
      date: "2019 - 2021",
      details: [
        "Apprentissage des bases fondamentales de l'informatique : algorithmique, structures de données",
        "Cours sur les langages tels que Python, Bash ou Java",
        "Développement des compétences en mathématiques avancées et en statistiques",
      ],
      logo: OrléansLogo,
    },
  ];

  const timelinePoints = [
    { label: "Master MIAGE - SIMSAB", offset: 0 },
    { label: "Licence 3 MIAGE", offset: 370 },
    { label: "Licence 1 et 2 Informatique", offset: 720 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-[#212E53] text-white">
      {/* Animation de fond */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#212E53] to-black opacity-40 animate-gradient blur-lg"></div>

      <div className="relative z-10 space-y-24 px-8 py-12 pt-20">
        {/* Titre principal */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 text-white">Parcours Scolaire</h1>
          <p className="text-3xl text-white-400">Présentation de mes études supérieures </p>
        </div>

        {/* Liste des formations avec barre de liaison */}
        <div className="relative flex space-x-12 px-8 lg:px-24">
          {/* Barre verticale avec points */}
          <div className="hidden lg:flex">
            <VerticalTimeline points={timelinePoints} />
          </div>

          {/* Liste des formations */}
          <div className="space-y-12 flex-grow">
            {parcours.map((formation, index) => (
              <div key={index}>
                <ExperiencesCases
                  title={formation.title}
                  location={formation.location}
                  date={formation.date}
                  details={formation.details}
                  logo={formation.logo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParcoursScolaire;
