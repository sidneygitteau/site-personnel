import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-[#212E53] text-white">
      {/* Animation de fond */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#212E53] to-black opacity-40 animate-gradient blur-lg"></div>

      <div className="relative z-10 space-y-24 px-8 py-12 pt-20">
        {/* Titre principal */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-8 text-white">Me Contacter</h1>
          <p className="text-3xl text-white-400 mt-2">
            Vous souhaitez me contacter ? Voici deux manières simples de le faire : <br />
          </p>
          <p className="text-2xl text-white-400 mt-2">
            <span style={{ paddingLeft: 50 }}>- Soit par mail à l'adresse : gitteau.sidney.pro@gmail.com</span><br />
            <span style={{ paddingLeft: 50 }}>- Soit par le biais de mon LinkedIn : Sidney Gitteau</span>
          </p>
          
        </div>

        {/* Boutons de contact */}
        <div className="flex justify-center space-x-8">
          {/* Bouton pour envoyer un mail */}
          <a
            href="mailto:gitteau.sidney@gmail.com?subject=Contact%20Site%20Internet"
            className="bg-gray-800 hover:bg-gray-900 transition duration-300 text-white rounded-xl text-2xl font-semibold shadow-lg flex items-center justify-center"
            style={{ width: '300px', height: '70px' }}
          >
            Envoyer un mail
          </a>

          {/* Bouton pour visiter LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sidney-gitteau/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-white rounded-xl text-2xl font-semibold shadow-lg flex items-center justify-center"
            style={{ width: '300px', height: '70px' }}
          >
            Acceder au LinkedIn
          </a>
        </div>


      </div>
    </div>
  );
};

export default Contact;
