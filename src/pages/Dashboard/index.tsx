import Lottie from "react-lottie";
import unlockAnimation from "../../assets/animations/unlock.json";
import { Container } from "@material-ui/core";
import { createLottieOptions } from "../../utils/generic";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Lottie
          options={createLottieOptions(unlockAnimation)}
          isClickToPauseDisabled={true}
          height={400}
          width={400}
        />
        <h1>Você está logado.</h1>
      </Container>
    </>
  );
};

export default Dashboard;
