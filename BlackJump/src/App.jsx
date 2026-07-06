import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Auth from './pages/Auth';
import './App.css';

// Componentes temporales para evitar errores de compilación mientras los creamos
const Placeholder = ({ name }) => (
    <div className="bg-black text-white min-h-screen flex items-center justify-center font-serif text-xl tracking-widest uppercase">
        Sección {name} - Próximamente
    </div>
);

function App() {
    return (
        <Router>
            {/* El Navbar flota por encima de todas las páginas */}
            <Navbar /> 
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/caballeros" element={<Placeholder name="Caballeros" />} />
                <Route path="/damas" element={<Placeholder name="Damas" />} />
                <Route path="/ninos" element={<Placeholder name="Niños" />} />
                <Route path="/contactos" element={<Placeholder name="Contactos" />} />
                <Route path="/login" element={<Auth />} />
                <Route path="/carrito" element={<Placeholder name="Carrito" />} />
                <Route path="/perfil" element={<Placeholder name="Perfil del Cliente" />} />
            </Routes>
        </Router>
    );
}

export default App;