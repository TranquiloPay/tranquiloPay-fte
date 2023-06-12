import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Nome obrigatório."),
  cpf: yup.string().required("CPF obrigatório."),
  email: yup.string().required("E-mail obrigatório.").email("E-mail inválido."),
  password: yup
    .string()
    .required("Senha obrigatória.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()_\-+=|{}[\]:;<>?,./])(?!.*\s).{8,}$/i,
      "A senha deve conter pelo menos uma letra maiúscula e uma minúscula, um número, um caractere especial e mais de 8 caracteres!"
    ),
  confirmPassword: yup
    .string()
    .required("Confirme sua senha.")
    .oneOf([yup.ref("password")], "Senhas diferentes!"),
});

export const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .required("E-mail é necessário para efetuar login.")
    .email("E-mail inválido."),
  password: yup.string().required("Senha é necessária para efetuar login."),
});

