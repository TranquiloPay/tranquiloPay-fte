import PaymentTable from "../../components/PaymentTable";
import Sidebar from "../../components/Sidebar";
import { Container, Header } from "./styles";
import { Typography } from "@mui/material";

const PaymentList = () => {
  return (
    <>
      <Sidebar />
      <Container>
        <Header>
          <Typography variant="h4" fontWeight={600}>
            Lista de pagamentos
          </Typography>
        </Header>
        <PaymentTable />
      </Container>
    </>
  );
};

export default PaymentList;
