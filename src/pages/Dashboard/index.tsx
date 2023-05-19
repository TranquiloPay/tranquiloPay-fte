import React from "react";
import Lottie from "react-lottie";
import unlockAnimation from "../../assets/animations/unlock.json";
import { Container, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: unlockAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Container style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Lottie options={lottieOptions} height={400} width={400} />{" "}
      <h1>Você está logado.</h1>
      <Button onClick={() => {navigate("/payments")}}color="primary" variant="contained" >Gerar Pagamento</Button>
    </Container>
  );
};

export default Dashboard;
