import { useNavigate } from "react-router";
import CustomizedTables from "../../components/PaymentTable";
import Sidebar from "../../components/Sidebar";
import { Container, Header } from "./styles";
import { Grid, Typography } from "@mui/material";

const PaymentList = () => {
  const navigate = useNavigate();

  return (
    <>
      <Grid container spacing={2}>
        <Container>
          <Header>
            <Typography variant="h4" fontWeight={600}>
              Lista de pagamentos
            </Typography>
          </Header>
          <CustomizedTables />
        </Container>
      </Grid>
    </>
  );
};

export default PaymentList;
