import Lottie from "react-lottie";
import paymentAnimation from "../../assets/animations/payment.json";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container, Typography } from "@mui/material";
import { useAuth } from "../../providers/Auth";
import { useNavigate } from "react-router-dom";
import { createLottieOptions } from "../../utils/generic";

const Home = () => {
  const navigate = useNavigate();

  const { token } = useAuth();

  if (token) navigate("/dashboard");

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100vh - 64px)",
        }}
      >
        <Container style={{ width: "500px" }}>
          <Typography variant="h3" gutterBottom>
            Bem-vindo ao TranquiloPay!
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Estamos felizes em recebê-lo em nossa plataforma de pagamentos
            segura e confiável. Com o TranquiloPay, você pode desfrutar de uma
            experiência simplificada ao realizar e receber pagamentos de forma
            rápida e conveniente. Nossa plataforma foi projetada para atender às
            suas necessidades financeiras, oferecendo uma variedade de recursos
            e funcionalidades que tornam as transações financeiras simples e
            seguras.
          </Typography>
        </Container>
        <Lottie
          options={createLottieOptions(paymentAnimation)}
          height={400}
          width={400}
          isClickToPauseDisabled={true}
        />{" "}
      </div>
    </div>
  );
};

export default Home;
