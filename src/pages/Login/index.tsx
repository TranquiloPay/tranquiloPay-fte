import { schemaLogin } from "../../components/schema";
import { useAuth } from "../../providers/Auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, ContainerForm } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface UserData {
  email: string;
  password: string;
}

const Login = () => {
  const { token, signIn } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(schemaLogin) });

  const onSubmitForm = (data: UserData) => {
    signIn(data);
  };

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token]);

  return (
    <>
      <Container>
        <ContainerForm>
          <h1>Login</h1>
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <Input
              data-cy="email/login"
              placeholder="E-mail"
              name="email"
              type="email"
              register={register}
              error={errors.email?.message}
            />
            <Input
              data-cy="password/login"
              placeholder="Senha"
              name="password"
              type="password"
              register={register}
              error={errors.password?.message}
            />
            <Button>Acessar</Button>
            <p>
              Não possui um cadastro?{" "}
              <Link to="/register">faça seu cadastro</Link>
            </p>
          </form>
        </ContainerForm>
      </Container>
    </>
  );
};

export default Login;
