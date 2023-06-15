import { AppBar, Toolbar, Container, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/Auth";
import { StyledButton } from "./styles";
import Aumigos from '../../assets/imgs/Logo_Aumigo.png';

const AppHeader = () => {
  const navigate = useNavigate();
  const { token, Logout } = useAuth();

  return (
    <AppBar
      position="fixed"
      style={{ width: "100%", backgroundColor: "white" }}
    >
      <Toolbar style={{ justifyContent: "space-between" }}>
        <div
          onClick={() => (token ? navigate("/dashboard") : navigate("/"))}
          style={{ color: "black", cursor: "pointer" }}
        >
          <img style={{width: '60px'}}src={Aumigos} alt="Logo Aumigos"/>
        </div>
        {!token ? (
          <>
            <div>
              <StyledButton onClick={() => navigate("/login")}>
                Entrar
              </StyledButton>
              <Button onClick={() => navigate("/register")}>Registrar</Button>
            </div>
          </>
        ) : (
          <Button onClick={() => Logout()}>Sair</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
