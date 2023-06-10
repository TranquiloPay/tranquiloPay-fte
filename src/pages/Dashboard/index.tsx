import Lottie from "react-lottie";
import unlockAnimation from "../../assets/animations/unlock.json";
import { Container } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

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
    <>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Lottie options={lottieOptions} height={400} width={400} />{" "}
        <h1>Você está logado.</h1>
      </Container>
    </>
  );
};

export default Dashboard;
