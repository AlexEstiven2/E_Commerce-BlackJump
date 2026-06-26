/**
 * Estructura
 *
 *  src/
 *   ├── paginas/
 *   │   └── PaginaDeAutenticacion.jsx        # Página principal de autenticación
 *   ├── componentes/
 *   │   └── autenticacion/
 *   │       ├── FormularioDeInicioDeSesion.jsx       # Subcomponente de login
 *   │       └── FormularioDeRegistro.jsx      # Subcomponente de registro
 *   └── contexto/
 *       └── ContextoAutenticacion.jsx     # Manejo global de usuario/token
 */

import { useState } from "react";
import FormularioDeInicioDeSesion from "../../componentes/autenticacion/FormularioDeInicioDeSesion";
import FormularioDeRegistro from "../../componentes/autenticacion/FormularioDeRegistro";
import "./PaginaDeAutenticacion.css";
export default function PaginaDeAutenticacion() {
  const [mode, setMode] = useState("sesion"); // "Iniciar sesion" o "Registrarse"

  return (
    <div className="pagina-de-autenticacion">
      <h1>Autenticación</h1>
      <h2>{mode === "sesion" ? "Iniciar Sesión" : "Registrarse"}</h2>

      {/* Botones para alternar */}
      <div className="interruptor-de-autenticacion">
        <button onClick={() => setMode("sesion")}>Iniciar Sesión</button>
        <button onClick={() => setMode("registro")}>Registrarse</button>
      </div>
      <div className="contenedor-de-autenticacion">
        {mode === "sesion" ? (
          <FormularioDeInicioDeSesion />
        ) : (
          <FormularioDeRegistro />
        )}
      </div>
    </div>
  );
}
