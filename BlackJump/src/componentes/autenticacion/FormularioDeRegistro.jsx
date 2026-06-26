import React, { useState } from "react";
export default function SignupForm() {
  const [imagenGuardada, setImagenGuardada] = useState(
    localStorage.getItem("imagenPerfil") || null,
  );
  const gestionarCambioDeArchivo = (evento) => {
    const archivoSeleccionado = evento.target.files[0];
    if (!archivoSeleccionado) return;

    const lector = new FileReader();
    lector.onload = () => {
      const imagenBase64 = lector.result;
      localStorage.setItem("imagenPerfil", imagenBase64);
      console.log("Imagen de perfil guardada en localStorage");
      setImagenGuardada(imagenBase64);
    };
    lector.readAsDataURL(archivoSeleccionado);
  };
  return (
    <>
      <form>
        <div className="contenedor-de-imagen">
          <img
            className="imagen-de-perfil"
            src={imagenGuardada}
            alt="Imagen de perfil"
          />
          <input
            type="file"
            accept="image/*"
            onChange={gestionarCambioDeArchivo}
          />
        </div>
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Correo" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Registrarse</button>
      </form>
    </>
  );
}
