import React from 'react';
import ExperiencesCases from '../components/ExperiencesCases';

import MNHLogo from '../assets/mnh-logo.png';

const ExperiencePro = () => {
  const experiences = [
    {
      title: "APPRENTI INGÉNIEUR ÉTUDES ET DÉVELOPPEMENT",
      location: "MNH",
      date: "Septembre 2022 - Septembre 2024",
      details: [
        "Développement et maintenance du patrimoine de tests automatisés au sein du Service Recette.",
        "Responsable de gestion de projet : planification de la charge de travail, allocation des ressources, qualification des livrables.",
        "Exécution et analyse des campagnes de tests.",
        "Élaboration de comptes rendus et de bilans de lancements de recettes.",
        "Définition des scénarios de tests et des jeux de données nécessaires au lancement de campagnes automatisées.",
        "Bilan : ",
        "- Plus de 40 000 cas de tests automatisés annuels, pour une équipe de 3 automaticiens.",
        "- Développement complet d'automate permettant la vérification complète de la bonne intégration en base des contrats des nouveaux adhérents.",
      ],
      logo: MNHLogo,
    },
    {
      title: "STAGE - AUTOMATISATION DE PROCESSUS DE TESTS",
      location: "MNH",
      date: "Avril 2022 - Juillet 2022",
      details: [
        "Création d’automates pour des procédures en environnements de recette, pré-production et production.",
        "Étude de faisabilité de tests automatisés sur l’Espace Adhérent Mobile.",
        "Découverte de la partie fonctionnelle du secteur mutualiste et de la santé.",
        "Expérience donnant suite à un contrat d'apprentissage.",
      ],
      logo: MNHLogo,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-[#212E53] text-white">
        {/* Animation de fond */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#212E53] to-black opacity-40 animate-gradient blur-lg"></div>

        <div className="relative z-10 space-y-24 px-8 py-12 pt-20">
            {/* Titre principal */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-extrabold mb-4 text-white">Expériences Professionnelles</h1>
                <p className="text-xl text-white-400">Voici un aperçu de mon parcours professionnel.</p>
            </div>



            {/* Liste des expériences avec barre de liaison */}
            <div className="relative flex space-x-12 px-8 lg:px-24">
                {/* Barre verticale avec points */}
                <div className="hidden lg:flex flex-col items-center relative">
                {/* Barre principale */}
                <div className="absolute w-1 h-full bg-gradient-to-b from-[#1A2443] to-gray-700"></div>
                </div>

                {/* Liste des expériences */}
                <div className="space-y-12 flex-grow">
                {experiences.map((experience, index) => (
                    <ExperiencesCases
                    key={index}
                    title={experience.title}
                    location={experience.location}
                    date={experience.date}
                    details={experience.details}
                    logo={experience.logo}
                    />
                ))}
                </div>
            </div>
        </div>            
    </div>
  );
};

export default ExperiencePro;
