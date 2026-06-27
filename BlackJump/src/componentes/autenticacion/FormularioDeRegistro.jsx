import React, { useState } from "react";
import { Input, Button } from "@reutilizables";
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
        <Button
          type="submit"
        >
          Registrarse
        </Button>
      </form>
    </>
  );
}
