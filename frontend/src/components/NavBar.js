import { Disclosure } from '@headlessui/react';
import { useState } from 'react';
import SG_BLANC from '../assets/SG_BLANC.png';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'À propos de moi', href: '/aproposdemoi' },
  { name: 'Parcours Scolaire', href: '/parcoursscolaire' },
  { name: 'Expériences Professionnelles', href: '/experienceprofessionnelles' },
  { name: 'Projets', href: '/projets' },
];

const contact = { name: 'Contact', href: '/contact' };

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [showBox, setShowBox] = useState(false);

  const toggleBox = () => {
    setShowBox((prev) => !prev);
  };

  return (
    <Disclosure as="nav" className="bg-[#212E53] fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* logo à gauche */}
          <div className="flex items-center">
            <img
              className="h-24 w-auto cursor-pointer"
              src={SG_BLANC}
              alt="Logo"
              onClick={toggleBox}
            />
          </div>

          {/* Tous les differents boutons de navigation au centre */}
          <div className="hidden sm:flex flex-grow justify-center space-x-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  'text-gray-300 hover:bg-[#1A2443] hover:text-white',
                  'rounded-md px-3 py-2 text-sm font-bold tracking-wide font-custom'
                )}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Bouton Contact à droite */}
          <div className="hidden sm:flex">
            <a
              href={contact.href}
              className="bg-[#1A2443] text-white rounded-md px-3 py-2 text-sm font-bold tracking-wide font-custom hover:bg-[#1A2443]"
            >
              {contact.name}
            </a>
          </div>
        </div>
      </div>

      {/* Boîte affichée au clic sur le logo */}
      {showBox && (
        <div className="absolute top-20 left-4 sm:left-8 bg-gray-800 text-white p-4 rounded-md shadow-lg">
          <p className="text-2xl font-bold text-center">Indice mot secret : P _ _</p>
          <button
            className="mt-4 bg-[#1A2443] text-white px-4 py-2 rounded-md hover:bg-[#1A2443]"
            onClick={toggleBox}
          >
            Fermer
          </button>
        </div>
      )}
    </Disclosure>
  );
}
