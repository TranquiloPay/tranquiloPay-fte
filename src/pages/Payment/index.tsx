import React from "react";
import { Container, PaymentForm, Title } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { payment } from "../../services/payment/payment";
import { toast } from "react-toastify";
import Sidebar from "../../components/Sidebar";
import { useUser } from "../../providers/User";

const schema = yup.object().shape({
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

  const { user } = useUser();

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
      customer: user.customerId,
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
    <>
      <Sidebar />
      <Container>
        {!urlPayment && (
          <PaymentForm onSubmit={handleSubmit(handlePayment)}>
            <Title>Gerar um pagamento</Title>
            <Input
              type="text"
              name="dueDate"
              placeholder="2028-12-12"
              register={register}
              error={errors.dueDate?.message && `${errors.dueDate?.message}`}
            />
            <Input
              type="text"
              name="value"
              placeholder="Valor inteiro acima de R$ 5"
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
    </>
  );
};

export default PaymentPage;
