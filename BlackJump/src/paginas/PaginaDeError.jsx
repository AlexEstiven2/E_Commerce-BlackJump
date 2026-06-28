import {useRouteError, useNavigate} from "react-router-dom";
import { ContenedorDePagina, Targeta, Boton } from "@reutilizables";
export default function PaginaDeError() {
    const error = useRouteError();
    const navigate = useNavigate();
  return (
    <ContenedorDePagina>
      <Targeta>
        <h1 className="text-2xl font-bold mb-4">
            {error?.message || "Ha ocurrido un error"}
        </h1>
        <h1 className="text-lg mb-4">
            {error?.statusText || "Error desconocido"}
        </h1>
        <p className="text-gray-400 mb-4">
            {(error?.data ?? error?.message) || "No se pudo obtener información del error"}
        </p>
        <Boton onClick={() => navigate(-1)}>Volver al inicio</Boton>
      </Targeta>
    </ContenedorDePagina>
  );
}
