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

import { useState, useEffect } from "react";
import FormularioDeInicioDeSesion from "../../componentes/autenticacion/FormularioDeInicioDeSesion";
import FormularioDeRegistro from "../../componentes/autenticacion/FormularioDeRegistro";

export default function PaginaDeAutenticacion() {
  const [sesion, setSesion] = useState("sesion"); // "Iniciar sesion" o "Registrarse"
  const [animacion, setAnimacion] = useState(false);

  useEffect(() => {
    setAnimacion(false);
    const timeout = setTimeout(() => {
      setAnimacion(true);
    }, 300);
    return () => clearTimeout(timeout);
  }, [sesion]);
  return (
    <div
      className={`min-h-screen bg-black text-white flex items-center justify-center px-4`}
    >
      <div
        className={`w-full max-w-3xl rounded-[2rem] bg-slate-950/40 border border-gray-700 shadow-xl/30 shadow-gray-800  p-8 md:p-12 inset-shadow-sm inset-shadow-gray-500/50`}
      >
        <div className="space-y-3 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-white">
            Autenticación
          </h1>
          <h2 className="text-gray-400 text-lg">
            {sesion === "sesion" ? "Iniciar Sesión" : "Registrarse"}
          </h2>
        </div>

        {/* Botones para alternar */}
        <div className="flex justify-center space-x-4 mt-4">
          <button
            className={`px-4 py-2 rounded cursor-pointer ${
              sesion === "sesion"
                ? "bg-gray-800 border border-gray-700 shadow-lg/50 shadow-gray-800 text-white inset-shadow-sm inset-shadow-gray-500/50"
                : "bg-gray-500 border border-gray-800 shadow-lg/50 shadow-gray-800 text-gray-100 inset-shadow-sm inset-shadow-gray-200/50"
            }`}
            onClick={() => setSesion("sesion")}
          >
            Iniciar Sesión
          </button>
          <button
            className={`px-4 py-2 rounded cursor-pointer ${
              sesion === "registro"
                ? "bg-gray-800 border border-gray-700 shadow-lg/50 shadow-gray-800 text-white inset-shadow-sm inset-shadow-gray-500/50"
                : "bg-gray-500 border border-gray-800 shadow-lg/50 shadow-gray-800 text-gray-100 inset-shadow-sm inset-shadow-gray-200/50"
            }`}
            onClick={() => setSesion("registro")}
          >
            Registrarse
          </button>
        </div>
        <div
          className={`mt-6 transition-all duration-700 ease-in-out ${
            animacion ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          {sesion === "sesion" ? (
            <FormularioDeInicioDeSesion />
          ) : (
            <FormularioDeRegistro />
          )}
        </div>
      </div>
    </div>
  );
}
