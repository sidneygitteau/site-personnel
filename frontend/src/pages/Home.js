import React, { useState, useEffect } from 'react';
import clavier from '../assets/clavier-image.jpg';

const Home = () => {
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [users, setUsers] = useState([]);
  const [passwordInput, setPasswordInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [hideTextAndImage, setHideTextAndImage] = useState(false);
  const correctPassword = 'PSG'; // Mot de passe correct

  // Charger les utilisateurs depuis la base de données
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/users'); // Requête GET
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
      }
    };

    fetchUsers();
  }, []);

  // Gestion du défilement pour masquer le texte et l'image
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setHideTextAndImage(true);
      } else {
        setHideTextAndImage(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Vérification du mot de passe
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === correctPassword) {
      setIsPasswordCorrect(true);
      setPasswordInput('');
    } else {
      alert('Mot de passe incorrect.');
    }
  };

  // Ajouter un utilisateur dans la base de données
  const handleAddUser = async (e) => {
    e.preventDefault();
    if (nameInput.trim()) {
      try {
        const response = await fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: nameInput }),
        });

        if (response.ok) {
          const newUser = await response.json();
          setUsers((prevUsers) => [...prevUsers, { name: nameInput }]); // Mettre à jour localement
          setNameInput('');
          alert('Utilisateur ajouté avec succès !');
        } else {
          throw new Error('Erreur lors de l’ajout de l’utilisateur.');
        }
      } catch (error) {
        console.error('Erreur lors de l’ajout de l’utilisateur :', error);
        alert('Une erreur est survenue. Veuillez réessayer.');
      }
    } else {
      alert('Veuillez entrer un nom et un prénom.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-[#212E53] text-white font-sans relative">
      {/* Animation de fond */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#212E53] to-black opacity-40 animate-gradient blur-lg"></div>

        
      {/* Section principale */}
      <div
        className={`relative z-10 flex flex-col md:flex-row items-center justify-center px-4 py-8 transition-opacity duration-700 pt-20 ${
          hideTextAndImage ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {/* Section gauche */}
        <div className="md:w-1/2">
          <h1 className="text-7xl font-extrabold mb-8 leading-tight text-center md:text-left text-white">
            Bienvenue sur mon site !
          </h1>
          <p className="text-3xl leading-relaxed mb-8">
            Vous êtes sur le site de  <span className="text-electric-blue font-semibold">Sidney GITTEAU</span>, tout récemment diplômé d'un Master Informatique.
          </p>
          <h2 className="text-4xl font-bold mb-4">Sur ce site, vous trouverez :</h2>
          {/* Tableau 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 shadow-lg border-2 border-electric-blue text-center hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold text-electric-blue">Des informations à mon sujet</h3>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 shadow-lg border-2 border-electric-blue text-center hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold text-electric-blue">Mes expériences professionnelles</h3>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 shadow-lg border-2 border-electric-blue text-center hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold text-electric-blue">Mes projets</h3>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 shadow-lg border-2 border-electric-blue text-center hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold text-electric-blue">Mon parcours scolaire</h3>
            </div>
          </div>
          <p className="text-2xl leading-relaxed">
            Sur ce site se cachent des indices afin de trouver un mot caché qui donne quelque chose que j'aime énormément ! Si vous trouvez les lettres donnant le mot secret, vous pourrez écrire votre nom afin d'être mentionné sur cette page.
          </p>
        </div>

        {/* Section droite (Image) */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            className="rounded-lg shadow-lg h-[500px] w-auto transform hover:scale-110 transition duration-500 animate-parallax"
            src={clavier}
            alt="Clavier"
          />
        </div>
      </div>

      {/* Formulaire mot secret */}
      <div
        className={`relative z-10 mt-24 px-4 transition-transform duration-700 ${
          hideTextAndImage ? 'translate-y-0' : 'translate-y-32'
        }`}
      >
        {!isPasswordCorrect ? (
          <form
            onSubmit={handlePasswordSubmit}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-12 rounded-3xl max-w-2xl mx-auto shadow-2xl relative overflow-hidden border-2 border-electric-blue"
          >
            <h2 className="text-5xl font-extrabold mb-6 text-center text-electric-blue">
              Quel est le mot secret ?
            </h2>
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              className="w-full px-6 py-4 border border-gray-600 rounded-lg bg-black text-white focus:ring-4 focus:ring-electric-blue text-2xl shadow-inner"
              required
            />
            <button
              type="submit"
              className="mt-8 bg-electric-blue text-black px-8 py-4 rounded-full hover:bg-blue-600 transition duration-300 w-full transform hover:scale-110 text-2xl font-semibold shadow-md"
            >
              Valider
            </button>
          </form>
        ) : (
          <form
            onSubmit={handleAddUser}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-12 rounded-3xl max-w-2xl mx-auto shadow-2xl relative overflow-hidden border-2 border-electric-blue"
          >
            <h2 className="text-5xl font-extrabold mb-6 text-center text-electric-blue">
              Ajoutez vos informations
            </h2>
            <input
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              className="w-full px-6 py-4 border border-gray-600 rounded-lg bg-black text-white focus:ring-4 focus:ring-electric-blue text-2xl shadow-inner"
              required
            />
            <button
              type="submit"
              className="mt-8 bg-electric-blue text-black px-8 py-4 rounded-full hover:bg-blue-600 transition duration-300 w-full transform hover:scale-110 text-2xl font-semibold shadow-md"
            >
              Ajouter
            </button>
          </form>
        )}
      </div>

      {/* Liste des utilisateurs */}
      <div className="relative z-10 mt-24 px-4">
        <h2 className="text-5xl font-extrabold mb-6 text-center text-electric-blue">
          Les maîtres du mot secret
        </h2>
        <ul className="list-none mx-auto max-w-3xl bg-gradient-to-r from-black via-gray-900 to-[#212E53] p-8 rounded-3xl shadow-2xl space-y-4 border-2 border-electric-blue">
          {users.map((user, index) => (
            <li key={index} className="text-electric-blue text-3xl font-bold text-center">
              {user.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Ajout d'un espace supplémentaire pour le scroll */}
        <div className="relative z-10 mt-24 px-4">
        <div className="h-32"></div> {/* Conteneur invisible pour ajouter un espace */}
        </div>

    </div>

    
  );
};

export default Home;
