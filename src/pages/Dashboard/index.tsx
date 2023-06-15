import Lottie from "react-lottie";
import Dogs from "../../assets/animations/dogs.json";
import { Container, Typography } from "@material-ui/core";
import { createLottieOptions } from "../../utils/generic";
import Sidebar from "../../components/Sidebar";
import Aumigos from "../../assets/imgs/Logo_Aumigo.png";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Container
                style={{
                  width: "275px",
                }}
        >
          <Typography variant="h6">Seja muito bem vindo(a)!</Typography>
          <Typography variant="h6">
            Esse espaço é para você
            <br></br><Typography style={{color: "rgb(209, 158, 67)"}} variant="h6">doar com segurança.</Typography>
          </Typography>
        </Container>
        <Lottie
          options={createLottieOptions(Dogs)}
          isClickToPauseDisabled={true}
          height={400}
          width={400}
        />
      </Container>
    </>
  );
};

export default Dashboard;
