import React, { useState } from "react";
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
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { Card, Typography } from "@mui/material";

dayjs.locale("pt-br");

const schema = yup.object().shape({
  dueDate: yup.date().required("Campo obrigatório"),
  value: yup
    .number()
    .typeError("O valor deve ser um número")
    .min(5, "O valor deve ser maior ou igual a R$ 5,00")
    .required("Campo obrigatório"),
});

const PaymentPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [urlPayment, setUrlPayment] = useState("");
  const [currentDate, _] = useState(dayjs().add(1, "day"));

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
          <PaymentForm
            onSubmit={handleSubmit(handlePayment)}
          >
            <Title>Fazer uma doação!</Title>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  {...register("dueDate")}
                  value={currentDate}
                  onChange={(date) => setValue("dueDate", date)}
                  format="DD/MM/YYYY"
                  disablePast
                  label="Data de vencimento"
                />
              </DemoContainer>
            </LocalizationProvider>
            <Input
              type="text"
              name="value"
              isMoney
              placeholder="5,00"
              register={register}
              error={errors.value?.message && `${errors.value?.message}`}
            />
            <Button type="submit">Gerar</Button>
          </PaymentForm>
        )}
        {urlPayment && (
          <Card
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "300px",
              height: "292px",
              padding: "10px",
            }}
          >
            <Title>Pagamento gerado!</Title>
            <Typography>
              Clique <a href={urlPayment}>aqui</a> para acessar o
            </Typography>
            <Typography>seu débito e realizar o pagamento!</Typography>
          </Card>
        )}
      </Container>
    </>
  );
};

export default PaymentPage;
