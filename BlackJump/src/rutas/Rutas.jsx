import {BrowserRouter, Routes, Route} from 'react-router-dom';

const rutas = [
]

export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        {rutas.map((ruta, index) => (
          <Route key={index} path={ruta.path} element={ruta.element} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
