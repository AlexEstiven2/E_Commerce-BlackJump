import React, { useState } from "react";
import { Input, Boton } from "@reutilizables";
export default function FormularioDeRegistro() {
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
      <form className={`space-y-4 flex flex-col justify-center items-center`}>
        <Input
          type="text"
          placeholder="Nombre"
        />
        <Input
          type="email"
          placeholder="Correo"
        />
        <Input
          type="email"
          placeholder="Confirmar Correo"
        />
        <Input
          type="password"
          placeholder="Contraseña"
        />
        <br />
        <br />
        <Boton
          type="submit"
        >
          Registrarse
        </Boton>
      </form>
    </>
  );
}
