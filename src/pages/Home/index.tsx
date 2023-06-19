import Lottie from "react-lottie";
import DogAndCat from "../../assets/animations/dog.json";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container, Typography } from "@mui/material";
import { useAuth } from "../../providers/Auth";
import { useNavigate } from "react-router-dom";
import { createLottieOptions } from "../../utils/generic";
import { ContainerContent, ContainerTexts, StyledContainer, StyledTypography } from "./styles";

const Home = () => {
  const navigate = useNavigate();

  const { token } = useAuth();

  if (token) navigate("/dashboard");

  return (
    <StyledContainer>
      <ContainerContent>
        <ContainerTexts>
          <StyledTypography variant="h5" gutterBottom>
            Bem-vindo ao PROJETO AUMIGO ESTOU AQUI!
          </StyledTypography>
          <StyledTypography variant="subtitle1" gutterBottom>
            Estamos felizes em recebê-lo em nossa plataforma de doações segura e
            confiável. <br></br>Aqui você pode desfrutar de uma experiência
            simplificada ao realizar doações de forma rápida e conveniente.{" "}
            <br></br>Nossa plataforma foi projetada para atender às suas
            necessidades, oferecendo uma variedade de recursos e funcionalidades
            que tornam as doações simples e seguras.
          </StyledTypography>
        </ContainerTexts>
        <Lottie
          options={createLottieOptions(DogAndCat)}
          isClickToPauseDisabled={true}
        />{" "}
      </ContainerContent>
    </StyledContainer>
  );
};

export default Home;
