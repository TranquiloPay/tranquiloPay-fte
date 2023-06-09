import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/Auth";

const AppHeader = () => {
  const navigate = useNavigate();
  const { token, Logout } = useAuth();

  return (
    <AppBar position="fixed" style={{ width: "100%", backgroundColor: 'white' }}>
      <Toolbar>
        <Typography
          onClick={() => {
            if(token) navigate("/dashboard");
            else navigate("/");
          }}
          variant="h6"
          style={{ flexGrow: 1, cursor: "pointer", color: 'black' }}
        >
          TranquiloPay
        </Typography>
      { !token ? (
        <>
      <Button onClick={() => navigate("/login")} color="black">
          Login
        </Button>
        <Button onClick={() => navigate("/register")} color="black">
          Register
        </Button>
        </>
        ) : <Button onClick={() => Logout()} color="black">
        Logout
      </Button>
        }
        
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
