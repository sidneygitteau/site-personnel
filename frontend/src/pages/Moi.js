import React from 'react';
import SectionImageRight from '../components/SectionImageRight';
import SectionImageLeft from '../components/SectionImageLeft';

import photoPro from '../assets/photo_pro.jpg';
import iaImage from '../assets/image_ia.webp';
import footballImage from '../assets/celebration-foot.jpg';
import japonImage from '../assets/shibuya.jpg';
import cs2Image from '../assets/cs2.jpg';

const Moi = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-[#212E53] text-white font-sans relative">
      {/* Animation de fond */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#212E53] to-black opacity-40 animate-gradient blur-lg"></div>

      <div className="relative z-10 space-y-24 px-8 py-0 pt-20">
        {/* Titre principal */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 text-white">
              À propos de moi
            </h1>
        </div>

        

        {/* Section 1: Moi */}
        <SectionImageRight
          title="Qui suis-je ?"
          text="Je m'appelle Sidney GITTEAU, j'ai 23 ans. Je viens tout juste d'obtenir mon Master MIAGE et je suis actuellement à la recherche d'un emploi. Je suis une personne reconnue pour mon savoir-être, ma curiosité, et ma rigueur, des qualités qui me permettent de m'adapter rapidement et de travailler efficacement en équipe."
          image={photoPro}
          alt="Photo Perso"
        />

        <div className="relative z-10 mt-12 border-t border-gray-600 opacity-50 mx-8"></div>

        {/* Tableau des compétences techniques */}
        <div className="text-center">
          <h2 className="text-5xl font-extrabold mb-8 leading-tight text-white">
            Langages et Technologies
          </h2>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Langages de Programmation</th>
                  <th>Technologies Web</th>
                  <th>Bases de Données</th>
                  <th>Logiciels et Environnements</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Java - JUnit</td>
                  <td>HTML/CSS</td>
                  <td>MongoDB</td>
                  <td>IntelliJ IDEA</td>
                </tr>
                <tr>
                  <td>JavaScript</td>
                  <td>React</td>
                  <td>MySQL</td>
                  <td>Visual Studio Code</td>
                </tr>
                <tr>
                  <td>Python</td>
                  <td>Node.js</td>
                  <td>PostgreSQL</td>
                  <td>Git</td>
                </tr>
                <tr>
                  <td>SQL / PLSQL</td>
                  <td>API REST</td>
                  <td>Oracle Database</td>
                  <td>JIRA</td>
                </tr>
                <tr>
                  <td>Groovy</td>
                  <td>Selenium</td>
                  <td></td>
                  <td>Activ' Infinite</td>
                </tr>
                <tr>
                  <td>R</td>
                  <td></td>
                  <td></td>
                  <td>Postman</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>




        <div className="relative z-10 mt-12 border-t border-gray-600 opacity-50 mx-8"></div>

        <div className="text-center mb-12">
          <h3 className="text-5xl font-extrabold mb-8 leading-tight text-white">
              Apprendre à me connaitre
          </h3>
        </div>
        {/* Section 2: Technologies */}
        <SectionImageLeft
          title="Nouvelles Technologies"
          text="Je suis passionné par les nouvelles technologies, les objets high-tech, la réalité virtuelle (VR), et tout ce qui touche au monde du numérique. Ces domaines me fascinent et j'aime rester à la pointe des innovations."
          image={iaImage}
          alt="Technologies"
        />

        <div className="relative z-5 mt-12 border-t border-gray-600 opacity-20 mx-auto w-1/2"></div>

        {/* Section 3: Voyages */}
        <SectionImageRight
          title="Voyages"
          text="J'adore voyager et découvrir de nouvelles cultures. Mon rêve ultime est de visiter le Japon, un pays riche en histoire, en technologie, et en traditions fantastiques. La découverte d'un pays passe énormément par sa culture gastronomique, et j'aime explorer de nouvelles saveurs."
          image={japonImage}
          alt="Japon"
        />

        <div className="relative z-5 mt-12 border-t border-gray-600 opacity-20 mx-auto w-1/2"></div>

        {/* Section 4: Sports */}
        <div className="flex flex-col-reverse md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 flex justify-center">
            <img
              src={footballImage}
              alt="Football"
              className="rounded-lg shadow-lg h-[500px] w-auto transform hover:scale-105 transition duration-500"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left text-justify">
            <h2 className="text-4xl font-bold mb-6">Sports</h2>
            <p className="text-3xl leading-relaxed">
              Je suis un grand fan de <span className="text-red font-semibold">S</span>ports : que ce soit le basketball, le volley-ball ou encore le tennis. Mais mon sport préféré est le football. 
              Que ce soit en tant que spectateur ou joueur amateur, en herbe ou en salle, j'aime ce sport, et j'aime l'analyser d'un point de vue tactique et statistique.
            </p>
          </div>
        </div>

        <div className="relative z-5 mt-12 border-t border-gray-600 opacity-20 mx-auto w-1/2"></div>

        {/* section 5: Jeux Vidéo */}
        <SectionImageRight
          title="Jeux Vidéo"
          text="Je suis un grand amateur de jeux vidéo, et mon jeu préféré est Counter-Strike 2. Ce jeu me passionne pour sa stratégie, son travail en équipe, et les échanges avec des joueurs du monde entier. C'est en plus une excellente occasion de parler anglais pour se coordonner avec ses coéquipiers et viser la victoire."
          image={cs2Image}
          alt="CS2"
        />

        <div className="relative z-10 mt-12 border-t border-gray-600 opacity-50 mx-8"></div>
      </div>
    </div>
  );
};

export default Moi;
