import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/Auth";
import { StyledButton } from "./styles";

const AppHeader = () => {
  const navigate = useNavigate();
  const { token, Logout } = useAuth();

  return (
    <AppBar
      position="fixed"
      style={{ width: "100%", backgroundColor: "white" }}
    >
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Typography
          onClick={() => (token ? navigate("/dashboard") : navigate("/"))}
          variant="h5"
          style={{ color: "black", cursor: "pointer" }}
        >
          TranquiloPay
        </Typography>
        {!token ? (
          <>
            <div>
              <StyledButton onClick={() => navigate("/login")}>
                Login
              </StyledButton>
              <Button onClick={() => navigate("/register")}>Register</Button>
            </div>
          </>
        ) : (
          <Button onClick={() => Logout()}>Logout</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
