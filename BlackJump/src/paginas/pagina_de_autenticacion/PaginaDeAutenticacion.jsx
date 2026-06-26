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
export default function PaginaDeAutenticacion() {
  const [mode, setMode] = useState("sesion"); // "Iniciar sesion" o "Registrarse"

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-3xl rounded-[2rem] bg-slate-950/95 border border-gray-700 shadow-[0_20px_80px_rgba(0,0,0,0.7)] p-8 md:p-12">
        <div className="space-y-3 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-white">
            Autenticación
          </h1>
          <h2 className="text-gray-400 text-lg">
            {mode === "sesion" ? "Iniciar Sesión" : "Registrarse"}
          </h2>
        </div>

        {/* Botones para alternar */}
        <div className="flex justify-center space-x-4 mt-4">
          <button
            className={`px-4 py-2 rounded ${
              mode === "sesion" ? "bg-gray-800 text-white" : "bg-gray-500 text-gray-300"
            }`}
            onClick={() => setMode("sesion")}
          >
            Iniciar Sesión
          </button>
          <button
            className={`px-4 py-2 rounded ${
              mode === "registro" ? "bg-gray-800 text-white" : "bg-gray-500 text-gray-300"
            }`}
            onClick={() => setMode("registro")}
          >
            Registrarse
          </button>
        </div>
        <div className="contenedor-de-autenticacion">
          {mode === "sesion" ? (
            <FormularioDeInicioDeSesion />
          ) : (
            <FormularioDeRegistro />
          )}
        </div>
      </div>
    </div>
  );
}
