import { schemaLogin } from "../../components/schema";
import { useAuth } from "../../providers/Auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import {
  Container,
  ContainerForm,
  StyledContainer,
  StyledInput,
} from "./styles";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import loginAnimation from "../../assets/animations/login.json";
import { createLottieOptions } from "../../utils/generic";
import { Typography } from "@mui/material";
import { ContainerDesktop } from "../Register/styles";
interface UserData {
  email: string;
  password: string;
}

const Login = () => {
  const { signIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(schemaLogin) });

  const onSubmitForm = (data: UserData) => {
    signIn(data);
  };

  return (
    <>
      <Container>
        <ContainerDesktop>
        <StyledContainer>
          <div>
            <Lottie
              options={createLottieOptions(loginAnimation, false)}
              isClickToPauseDisabled={true}
              height={400}
              width={400}
            />
          </div>
        </StyledContainer>
        </ContainerDesktop>
          <form onSubmit={handleSubmit(onSubmitForm)}>
          <Typography variant="h3">Entrar</Typography>
            <StyledInput
              data-cy="email/login"
              label="E-mail"
              name="email"
              type="email"
              register={register}
              error={errors.email?.message}
              width="100%"
            />
            <StyledInput
              data-cy="password/login"
              label="Senha"
              name="password"
              type="password"
              register={register}
              width="100%"
              error={errors.password?.message}
            />
            <Typography>
              Não possui um cadastro?{" "}
              <Link to="/register">Faça seu cadastro!</Link>
            </Typography>
            {/* ToDo: Uncomment after implementing password recovery. */}
            {/* <Typography variant="h6">
              Esqueceu sua senha? {""}
              <Link to="/register">Esqueci minha senha</Link>
            </Typography> */}
            <Button style={{ width: "100%", marginTop: "37px" }}>
              Acessar
            </Button>
          </form>
      </Container>
    </>
  );
};

export default Login;
