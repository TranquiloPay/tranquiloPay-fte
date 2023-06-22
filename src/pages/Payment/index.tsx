import React, { useEffect, useState } from "react";
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
    .mixed()
    .transform((value, originalValue) => {
      if (originalValue === "") {
        return ""; // Retorna a string vazia se o valor estiver vazio
      }

      const numericValue = originalValue.replace(",", ".");

      return parseFloat(numericValue); // Converte para número válido
    })
    .test("minimumValue", "O valor deve ser maior ou igual a R$ 5,00", (value) => {
      if (value === "" || isNaN(value)) {
        return false;
      }

      return value >= 5;
    })
    .typeError("O valor deve ser numérico")
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
  const [currentDate, setCurrentDate] = useState(dayjs().add(1, "day"));

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

  const handleInputChange = (event: { target: { value: any } }) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/[^0-9]/g, "");
    let formattedValue = "";

    if (numericValue.length > 2) {
      const integerPart = numericValue.slice(0, -2);
      const decimalPart = numericValue.slice(-2);

      formattedValue = `${integerPart},${decimalPart}`;
    } else if (numericValue.length === 1) {
      formattedValue = `0,0${numericValue}`;
    }

    if (formattedValue !== "0,00") {
      formattedValue = formattedValue.replace(/^0+/, "");
    }

    setValue("value", formattedValue);
  };

  useEffect(() => {
    setValue("dueDate", currentDate);
  }, [currentDate]);

  return (
    <>
      <Sidebar />
      <Container>
        {!urlPayment && (
          <PaymentForm onSubmit={handleSubmit(handlePayment)}>
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
                  sx={{width: '100% !important'}}
                />
              </DemoContainer>
            </LocalizationProvider>
            <Input
              type="text"
              name="value"
              isMoney
              placeholder="5,00"
              onChange={handleInputChange}
              register={register}
              error={errors.value?.message && `${errors.value?.message}`}
            />
            <Button onClick={() => console.log(currentDate)} type="submit">
              Gerar
            </Button>
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
              Clique{" "}
              <a href={urlPayment} target="_blank">
                aqui
              </a>{" "}
              para acessar a
            </Typography>
            <Typography>sua doação e realizar o pagamento!</Typography>
            <Button
              onClick={() => {
                setValue("value", "");
                setCurrentDate(dayjs().add(1, "day"));
                setUrlPayment("");
              }}
              type="submit"
            >
              Gerar nova doação
            </Button>
          </Card>
        )}
      </Container>
    </>
  );
};

export default PaymentPage;
