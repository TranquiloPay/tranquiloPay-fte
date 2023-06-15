import { Container, FormContainer } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../components/schema";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { registerNewUser } from "../../services/register/registerService";
import { toast } from "react-toastify";
import Lottie from "react-lottie";
import registerAnimation from "../../assets/animations/register.json";
import { Typography } from "@mui/material";

interface UserData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  cpf: string;
}

const Register = () => {
  const navigate = useNavigate();

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: registerAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({ resolver: yupResolver(schema) });

  const createUser = (data: UserData) => {
    const newData = {
      email: data?.email,
      password: data?.password,
      confirmpassword: data?.confirmPassword,
      name: data?.name,
      cpf: data?.cpf,
    };

    registerNewUser(newData)
      .then((response) => {
        localStorage.clear();
        toast.success(response.data.msg);
        setTimeout(() => navigate("/login"), 2000);
      })
      .catch((error) => toast.error(error.response.data.msg));
  };

  return (
    <>
      <Container>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Lottie
            options={lottieOptions}
            height={400}
            width={400}
            isClickToPauseDisabled={true}
          />{" "}
          <Typography variant="h6">
            Já possui uma conta? <Link to="/login">Entrar!</Link>
          </Typography>
        </div>
        <FormContainer>
          <h1>Cadastro</h1>
          <form onSubmit={handleSubmit(createUser)}>
            <Input
              data-cy="name/register"
              label="Nome"
              name="name"
              type="text"
              maxLength={50}
              register={register}
              error={errors.name?.message && `${errors.name?.message}`}
              width="100%"
            />
            <Input
              data-cy="password/register"
              label="CPF"
              name="cpf"
              type="text"
              register={register}
              error={errors.cpf?.message && `${errors.cpf?.message}`}
              width="100%"
            />
            <Input
              data-cy="email/register"
              label="E-mail"
              name="email"
              type="email"
              register={register}
              error={errors.email?.message && `${errors.email?.message}`}
              width="100%"
            />
            <Input
              data-cy="password/register"
              label="Senha"
              name="password"
              type="password"
              register={register}
              error={errors.password?.message && `${errors.password?.message}`}
              width="100%"
            />
            <Input
              data-cy="confirmpassword/register"
              label="Confirmar Senha"
              name="confirmPassword"
              type="password"
              register={register}
              error={
                errors.confirmPassword?.message &&
                `${errors.confirmPassword?.message}`
              }
              width="100%"
            />
            <Button type="submit">Cadastrar</Button>
          </form>
        </FormContainer>
      </Container>
    </>
  );
};

export default Register;
