import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Digite seu nome"),
  cpf: yup.string().required("CPF obrigatório."),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()_\-+=|{}[\]:;<>?,./])(?!.*\s).{8,}$/i,
      "A senha deve conter pelo menos uma letra maiúscula e uma minúscula, um número, um caractere especial e mais de 8 caracteres!"
    ),
  confirmPassword: yup
    .string()
    .required("Confirme sua senha")
    .oneOf([yup.ref("password")], "Senhas diferentes"),
});

export const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .required("E-mail necessário para efetuar login")
    .email("E-mail inválido"),
  password: yup.string().required("Senha necessária para efetuar login"),
});

