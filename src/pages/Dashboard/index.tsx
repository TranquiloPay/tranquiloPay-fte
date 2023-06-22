import Lottie from "react-lottie";
import Dogs from "../../assets/animations/dogs.json";
import { Typography, Grid } from "@material-ui/core";
import { createLottieOptions } from "../../utils/generic";
import Sidebar from "../../components/Sidebar";
import {
  StyledContainer,
  ContainerContent,
  ContainerTexts,
  ContainerLottie,
  StyledTypography,
} from "./styles";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <StyledContainer>
        <ContainerContent>
          <ContainerTexts>
            <StyledTypography variant="h6">
              Seja muito bem vindo(a)!
            </StyledTypography>
            <StyledTypography variant="h5">
              Esse espaço é para você
            </StyledTypography>
            <StyledTypography
              style={{ color: "rgb(209, 158, 67)" }}
              variant="h5"
            >
              doar com segurança.
            </StyledTypography>
          </ContainerTexts>
          <ContainerLottie>
            <Lottie
              options={createLottieOptions(Dogs)}
              isClickToPauseDisabled={true}
            />
          </ContainerLottie>
        </ContainerContent>
      </StyledContainer>
    </>
  );
};

export default Dashboard;
