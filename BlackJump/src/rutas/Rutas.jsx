import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { PaginaDelPanel, PaginaDeAutenticacion, PaginaDeError } from '@paginas';
const rutas = [
    { path: "/autenticacion", element: <PaginaDeAutenticacion />, label: "Autenticación" },
    { path: "/panel", element: <PaginaDelPanel />, label: "Panel" }
]

export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/autenticacion" replace />} />
        {rutas.map((ruta, index) => (
          <Route key={index} path={ruta.path} element={ruta.element} errorElement={<PaginaDeError />} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
