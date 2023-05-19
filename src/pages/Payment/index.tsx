import React from "react";
import { Container, PaymentForm, Title } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { payment } from "../../services/payment/payment";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  customer: yup.string().required("Campo obrigatório"),
  billingType: yup.string().required("Campo obrigatório"),
  dueDate: yup.date().required("Campo obrigatório"),
  value: yup.number().required("Campo obrigatório"),
});

const PaymentPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handlePayment = async (data: any) => {
    const dataObj = {
      customer: "cus_000053996492",
      billingType: data.billingType,
      dueDate: "2017-06-10",
      value: data.value,
    };
    payment(dataObj)
      .then((response) => {
        toast.success("Sucesso!");
        console.log(response);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <Container>
      <PaymentForm onSubmit={handleSubmit(handlePayment)}>
        <Title>Pagamento com PIX</Title>
        <Input
          type="text"
          name="customer"
          placeholder="Customer"
          register={register}
        />
        {errors.customer && <span>{errors.customer.message}</span>}
        <Input
          type="text"
          name="billingType"
          placeholder="Billing Type"
          register={register}
        />
        {errors.billingType && <span>{errors.billingType.message}</span>}
        <Input
          type="text"
          name="dueDate"
          placeholder="Due Date"
          register={register}
        />
        {errors.dueDate && <span>{errors.dueDate.message}</span>}
        <Input
          type="text"
          name="value"
          placeholder="Value"
          register={register}
        />
        {errors.value && <span>{errors.value.message}</span>}
        <Button type="submit">Pagar</Button>
      </PaymentForm>
    </Container>
  );
};

export default PaymentPage;
