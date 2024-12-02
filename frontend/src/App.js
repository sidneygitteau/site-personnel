import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import Projets from './pages/Projets';
import Contact from './pages/Contact';
import Moi from './pages/Moi';
import ParcoursScolaire from './pages/ParcoursScolaire';
import ExperiencePro from './pages/ExperiencePro';
import Navbar from './components/NavBar';

const App = () => {
    return (
      
        <Router>
          <Navbar/>
            
            <main>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/aproposdemoi" element={<Moi/>} />
                    <Route path="/parcoursscolaire" element={<ParcoursScolaire/>} />
                    <Route path="/experienceprofessionnelles" element={<ExperiencePro/>} />
                    <Route path="/projets" element={<Projets/>} />
                    <Route path="/contact" element={<Contact/>} />
                </Routes>
            </main>
        </Router>
    );
};

export default App;
