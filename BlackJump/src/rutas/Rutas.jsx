import { createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom';
import { PaginaDelPanel, PaginaDeAutenticacion, PaginaDeError } from '@paginas';
const rutas = createBrowserRouter([
    {path: "/", element: <Navigate to="/autenticacion" replace/>, label: "Inicio"},
    { path: "/autenticacion", element: <PaginaDeAutenticacion />, label: "Autenticación" },
    { path: "/panel", element: <PaginaDelPanel />, label: "Panel" },
    { path: "/error", element: <PaginaDeError />, label: "Error" },
    { path: "*", element: <Navigate to="/error" replace />, label: "Error" }
])

export default function Rutas() {
  return <RouterProvider router={rutas} />;
}
