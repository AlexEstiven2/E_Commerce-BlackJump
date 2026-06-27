import { Button, Input } from "@reutilizables";
export default function LoginForm() {
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
      <Button
        type="submit"
      >
        Entrar
      </Button>
    </form>
  );
}
