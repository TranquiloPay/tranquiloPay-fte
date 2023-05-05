import { Container, FormContainer } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../components/schema";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useAuth } from "../../providers/Auth";
import { registerNewUser } from "../../services/register/registerService";
import { toast } from "react-toastify";
import { useEffect } from "react";

interface UserData {
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  oab: string;
  state: string;
  username: string;
}

const Register = () => {
  const { token } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({ resolver: yupResolver(schema) });

  const createUser = (data: any) => {
    const newData = {
      email: data.email,
      password: data.password,
      confirmpassword: data.confirmPassword,
      name: data.name,
    };

    registerNewUser(newData)
      .then((response) => {
        localStorage.clear();
        toast.success("Conta criada");
        setTimeout(() => navigate("/login"), 2000);
      })
      .catch((error) => toast.error(error.response.data));
  };

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token]);

  return (
    <>
      <Container>
        <FormContainer>
          <h1>Cadastro</h1>
          <form onSubmit={handleSubmit(createUser)}>
            <Input
              data-cy="name/register"
              placeholder="Nome"
              name="name"
              type="text"
              maxLength={15}
              register={register}
              error={errors.name?.message}
            />
            <Input
              data-cy="email/register"
              placeholder="E-mail"
              name="email"
              type="email"
              register={register}
              error={errors.email?.message}
            />
            <Input
              data-cy="password/register"
              placeholder="Senha"
              name="password"
              type="password"
              register={register}
              error={errors.password?.message}
            />
            <Input
              data-cy="confirmpassword/register"
              placeholder="Confirmar Senha"
              name="confirmPassword"
              type="password"
              register={register}
              error={errors.confirmPassword?.message}
            />
            <Button data-cy="button/register" type="submit">
              Cadastrar
            </Button>
            <p>
              Já possui um cadastro? <Link to="/login">faça seu login</Link>
            </p>
          </form>
        </FormContainer>
      </Container>
    </>
  );
};

export default Register;
