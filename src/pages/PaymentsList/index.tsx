import { useEffect, useState } from "react";
import LoadingDots from "../../assets/animations/loadingDots.json";
import Empty from "../../assets/animations/empty.json";
import PaymentTable from "../../components/PaymentTable";
import Sidebar from "../../components/Sidebar";
import { Container, ContainerTable, Footer, Header } from "./styles";
import { Typography } from "@mui/material";
import { getPaymentsByCustomerId } from "../../services/payment/payment";
import { useUser } from "../../providers/User";
import { LoadingWrapper } from "../../styles/global";
import Lottie from "react-lottie";
import { createLottieOptions } from "../../utils/generic";

const PaymentList = () => {
  const [billings, setBillings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUser();

  const renderListOrEmpty = () => {
    if (billings.length > 0) {
      return <PaymentTable tableData={billings} />;
    }
    if (billings.length === 0 && !isLoading) {
      return (
        <Lottie
          options={createLottieOptions(Empty)}
          isClickToPauseDisabled={true}
          height={400}
          width={400}
        />
      );
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getPaymentsByCustomerId(user.customerId)
      .then((response) => {
        setBillings(response.billings.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (billings.length >= 0) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  }, [billings]);

  return (
    <>
      <Sidebar />
      <Container>
        <Header>
          <Typography variant="h4" fontWeight={600}>
            Lista de Doações
          </Typography>
        </Header>
      </Container>
      <ContainerTable>
        {isLoading ? (
          <LoadingWrapper>
            <Lottie
              options={createLottieOptions(LoadingDots)}
              isClickToPauseDisabled={true}
              height={120}
              width={120}
            />
          </LoadingWrapper>
        ) : (
          renderListOrEmpty()
        )}
      </ContainerTable>
      <Footer />
    </>
  );
};

export default PaymentList;
