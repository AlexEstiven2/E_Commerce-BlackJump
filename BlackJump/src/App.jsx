import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BarraDeNavegacion from "./components/BarraDeNavegacion";
import PaginaDeInicio from "./paginas/PaginaDeInicio";
import PaginaDeAutenticacion from "./paginas/PaginaDeAutenticacion";
import "./App.css";

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
      <BarraDeNavegacion />

      <Routes>
        <Route path="/" element={<PaginaDeInicio />} />
        <Route path="/caballeros" element={<Placeholder name="Caballeros" />} />
        <Route path="/damas" element={<Placeholder name="Damas" />} />
        <Route path="/ninos" element={<Placeholder name="Niños" />} />
        <Route path="/contactos" element={<Placeholder name="Contactos" />} />
        <Route path="/login" element={<PaginaDeAutenticacion />} />
        <Route path="/carrito" element={<Placeholder name="Carrito" />} />
        <Route
          path="/perfil"
          element={<Placeholder name="Perfil del Cliente" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
