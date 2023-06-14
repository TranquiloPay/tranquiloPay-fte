import { useEffect, useState } from "react";
import LoadingDots from "../../assets/animations/loadingDots.json";
import PaymentTable from "../../components/PaymentTable";
import Sidebar from "../../components/Sidebar";
import { Container, ContainerTable, Header } from "./styles";
import { Typography } from "@mui/material";
import { getPaymentsByCustomerId } from "../../services/payment/payment";
import { useUser } from "../../providers/User";
import { LoadingWrapper } from "../../styles/global";
import Lottie from "react-lottie";
import { createLottieOptions } from "../../utils/generic";

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
        {!billings.length ? (
          <LoadingWrapper>
            <Lottie
              options={createLottieOptions(LoadingDots)}
              isClickToPauseDisabled={true}
              height={120}
              width={120}
            />
          </LoadingWrapper>
        ) : (
          <PaymentTable tableData={billings} />
        )}
      </ContainerTable>
    </>
  );
};

export default PaymentList;
