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
import {
  FormularioDeInicioDeSesion,
  FormularioDeRegistro,
} from "@autenticacion";
import { Boton, Targeta, ContenedorDePagina } from "@reutilizables";

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
    <ContenedorDePagina>
      <Targeta>
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
          <Boton
            type="button"
            variant={sesion === "sesion" ? "light" : "ghost"}
            className="w=auto min-w-[170px] px-4 py-2 rounded cursor-pointer"
            onClick={() => setSesion("sesion")}
          >
            Iniciar Sesión
          </Boton>
          <Boton
            type="button"
            variant={sesion === "registro" ? "light" : "ghost"}
            className="w=auto min-w-[170px] px-4 py-2 rounded cursor-pointer"
            onClick={() => setSesion("registro")}
          >
            Registrarse
          </Boton>
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
      </Targeta>
    </ContenedorDePagina>
  );
}
