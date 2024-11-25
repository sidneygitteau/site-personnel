import React from 'react';
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

      <div className="relative z-10 space-y-24 px-8 py-12 pt-20">
        {/* Titre principal */}
        <div className="text-center mb-12">
        <h1 className="text-7xl font-extrabold mb-8 leading-tight text-center md:text-left text-white">
            À propos de moi
          </h1>
        </div>

        {/* grand separateur*/}
        <div className="relative z-10 mt-12 border-t border-gray-600 opacity-50 mx-8"></div>

        {/* Section 1: Moi */}
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 text-center md:text-left">
          <p className="text-3xl leading-relaxed">
            Je m'appelle <span className="text-electric-blue font-semibold">Sidney GITTEAU</span>, 
            j'ai 23 ans. Je viens tout juste d'obtenir mon <span className="text-electric-blue font-semibold">Master MIAGE </span> 
            et je suis actuellement <span className="text-electric-blue font-semibold">à la recherche d'un emploi</span>. 
            Je suis une personne reconnue pour mon <span className="text-electric-blue font-semibold">savoir-être</span>, 
            ma <span className="text-electric-blue font-semibold">curiosité</span>, et ma <span className="text-electric-blue font-semibold">rigueur</span>, 
            des qualités qui me permettent de m'adapter rapidement et de <span className="text-electric-blue font-semibold">travailler efficacement en équipe</span>.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center relative">
            <img
              src={photoPro}
              alt="Photo Sidney"
              className="rounded-lg shadow-lg h-[500px] w-auto transform hover:scale-105 transition duration-500"
            />
          </div>
        </div>

        <div className="relative z-5 mt-12 border-t border-gray-600 opacity-20 mx-auto w-1/2"></div>

        {/* Section 2: Technologies */}
        <div className="relative flex flex-col-reverse md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 flex justify-center">
            <img
              src={iaImage}
              alt="Technologie"
              className="rounded-lg shadow-lg h-[500px] w-auto transform hover:scale-105 transition duration-500"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-3xl leading-relaxed">
              Je suis passionné par les <span className="text-electric-blue font-semibold">nouvelles technologies</span>, les 
              <span className="text-electric-blue font-semibold"> objets high-tech</span>, la <span className="text-electric-blue font-semibold">réalité virtuelle (VR) </span> 
              et tout ce qui touche au monde numérique. Ces domaines me fascinent et j'aime rester à la pointe des innovations.
            </p>
          </div>
        </div>

        <div className="relative z-5 mt-12 border-t border-gray-600 opacity-20 mx-auto w-1/2"></div>

        {/* Section 3: Voyage */}
        <div className="relative flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-3xl leading-relaxed">
              J'adore voyager et découvrir de nouvelles cultures. Mon rêve ultime est de visiter 
              le <span className="text-electric-blue font-semibold">Japon</span>, un pays riche en histoire, en technologie, et en traditions fascinantes.
              Je pense par ailleurs que la découverte d'un pays passe énormément par sa <span className="text-electric-blue font-semibold">culture gastronomique</span>. J'aime donc tout naturellement manger et découvrir de nouvelles saveurs.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={japonImage}
              alt="Japon"
              className="rounded-lg shadow-lg h-[500px] w-auto transform hover:scale-105 transition duration-500"
            />
          </div>
        </div>

        <div className="relative z-5 mt-12 border-t border-gray-600 opacity-20 mx-auto w-1/2"></div>

        {/* Section 4: Sports */}
        <div className="relative flex flex-col-reverse md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 flex justify-center">
            <img
              src={footballImage}
              alt="Football"
              className="rounded-lg shadow-lg h-[500px] w-auto transform hover:scale-105 transition duration-500"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-3xl leading-relaxed">
              Je suis un grand fan de <span className="text-electric-blue font-semibold">S</span>port : que ce soit le basketball, le volley-ball ou encore le tennis. Mais mon sport préféré est le <span className="text-electric-blue font-semibold">football</span>. 
              Que ce soit en tant que spectateur ou joueur amateur, en herbe ou en salle, j'aime ce sport, et j'aime l'analyser d'un point de vue tactique et statistique.
            </p>
          </div>
        </div>

        <div className="relative z-5 mt-12 border-t border-gray-600 opacity-20 mx-auto w-1/2"></div>


        {/* Section 5: Jeux vidéo */}
        <div className="relative flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-3xl leading-relaxed">
              Je suis un grand amateur de <span className="text-electric-blue font-semibold">jeux vidéo</span>, et mon jeu préféré est 
              <span className="text-electric-blue font-semibold"> Counter-Strike 2</span>. Ce jeu me passionne pour sa stratégie, son <span className="text-electric-blue font-semibold">travail en équipe</span>, 
               et les échanges avec des joueurs du monde entier. C'est en plus une excellente occasion de parler anglais 
              pour se coordonner avec ses coéquipiers et viser la victoire.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={cs2Image}
              alt="CS2"
              className="rounded-lg shadow-lg h-[500px] w-auto transform hover:scale-105 transition duration-500"
            />
          </div>
        </div>

        {/* grand separateur*/}
        <div className="relative z-10 mt-12 border-t border-gray-600 opacity-50 mx-8"></div>
      </div>
    </div>
  );
};

export default Moi;
