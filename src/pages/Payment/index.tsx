import React from "react";
import { Container, PaymentForm, Title } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { payment } from "../../services/payment/payment";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
  customer: yup.string().required("Campo obrigatório"),
  billingType: yup.string().required("Campo obrigatório"),
  dueDate: yup.date().required("Campo obrigatório"),
  value: yup.number().required("Campo obrigatório"),
});

const PaymentPage = () => {
  const [urlPayment, setUrlPayment] = React.useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function removeBaseUrl(url: any) {
    const baseUrl = "http://localhost:5173/";
    console.log(url);
    if (url.startsWith(baseUrl)) {
      return url.substring(baseUrl.length);
    }

    return url;
  }

  const handlePayment = async (data: any) => {
    const dataObj = {
      customer: "cus_000054004956",
      billingType: "UNDEFINED",
      dueDate: data.dueDate,
      value: data.value,
    };
    payment(dataObj)
      .then((response) => {
        toast.success(response.msg);
        setUrlPayment(removeBaseUrl(response.url));
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <Container>
      {!urlPayment && (
        <PaymentForm onSubmit={handleSubmit(handlePayment)}>
          <Title>Pagamento com PIX</Title>
          <Input
            type="text"
            name="customer"
            placeholder="Customer"
            register={register}
            error={errors.customer?.message && `${errors.customer?.message}`}
          />
          <Input
            type="text"
            name="billingType"
            placeholder="Tipo de pagamento"
            register={register}
            error={
              errors.billingType?.message && `${errors.billingType?.message}`
            }
          />
          <Input
            type="text"
            name="dueDate"
            placeholder="Data de vencimento"
            register={register}
            error={errors.dueDate?.message && `${errors.dueDate?.message}`}
          />
          <Input
            type="text"
            name="value"
            placeholder="Valor do pagamento"
            register={register}
            error={errors.value?.message && `${errors.value?.message}`}
          />
          <Button type="submit">Gerar</Button>
        </PaymentForm>
      )}
      {urlPayment && (
        <>
          <p>
            Clique <a href={urlPayment}>aqui</a> para acessar o seu débito!
          </p>
        </>
      )}
    </Container>
  );
};

export default PaymentPage;
