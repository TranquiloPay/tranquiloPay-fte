import { useEffect, useState } from "react";
import PaymentTable from "../../components/PaymentTable";
import Sidebar from "../../components/Sidebar";
import { Container, ContainerTable, Header } from "./styles";
import { Typography } from "@mui/material";
import { getPaymentsByCustomerId } from "../../services/payment/payment";
import { useUser } from "../../providers/User";

const PaymentList = () => {
  const [billings, setBillings] = useState([]);
  const { user } = useUser();
  useEffect(() => {
    getPaymentsByCustomerId(user.customerId)
      .then((response) => {
        setBillings(response.billings.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Sidebar />
      <Container>
        <Header>
          <Typography variant="h4" fontWeight={600}>
            Lista de pagamentos
          </Typography>
        </Header>
      </Container>
      <ContainerTable>
        <PaymentTable tableData={billings} />
      </ContainerTable>
    </>
  );
};

export default PaymentList;
