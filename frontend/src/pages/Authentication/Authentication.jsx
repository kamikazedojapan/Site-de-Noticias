import { useForm } from "react-hook-form";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { AuthContainer, Section } from "./AuthenticationStyled";
// import { zodResolver } from "@hookform/resolvers/zod";

export function Authentication() {
  const {
    register: registerSignup,
    handleSubmit: handleSubmitSignup,
    formState: { errors: errorsSignup },
  } = useForm();
  const {
    register: registerSignin,
    handleSubmit: handleSubmitSignin,
    formState: { errors: errorsSignin },
  } = useForm();

  function inHandleSubmit(data) {
    try {
      console.log(data);
    } catch (error) {
      console.log(error)
      return errorsSignin
    }
  }
  function upHandleSubmit(data) {
    try {
      console.log(data);
    } catch (error) {
      console.log(error)
      return errorsSignup
    }
  }

  return (
    <AuthContainer>
      <Section type="signin">
        <h2>Entrar</h2>
        <form onSubmit={handleSubmitSignin(inHandleSubmit)}>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            register={registerSignin}
          />
          <Input
            type="password"
            placeholder="Senha"
            name="password"
            register={registerSignin}
          />
          <Button type="submit" text="Entrar"></Button>
        </form>
      </Section>

      <Section type="signup">
        <h2>Cadastrar</h2>
        <form onSubmit={handleSubmitSignup(upHandleSubmit)}>
          <Input
            type="text"
            placeholder="Nome"
            name="name"
            register={registerSignup}
          />
          <Input
            type="email"
            placeholder="Email"
            name="email"
            register={registerSignup}
          />
          <Input
            type="password"
            placeholder="Senha"
            name="password"
            register={registerSignup}
          />
          <Input
            type="password"
            placeholder="Confirmar Senha"
            name="password"
            register={registerSignup}
          />
          <Button type="submit" text="Cadastrar"></Button>
        </form>
      </Section>
    </AuthContainer>
  );
}
