import { Boton, Input } from "@reutilizables";
export default function FormularioDeInicioDeSesion() {
  return (
    <form className={`space-y-4 flex flex-col justify-center items-center`}>
      <Input
        type="email"
        placeholder="Correo"
      />
      <Input
        type="password"
        placeholder="Contraseña"
      />
      <Boton
        type="submit"
      >
        Entrar
      </Boton>
    </form>
  );
}
