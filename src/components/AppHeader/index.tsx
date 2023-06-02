import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const AppHeader = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="fixed" style={{ width: "100%", backgroundColor: 'white' }}>
      <Toolbar>
        <Typography
          onClick={() => navigate("/")}
          variant="h6"
          style={{ flexGrow: 1, cursor: "pointer", color: 'black' }}
        >
          TranquiloPay
        </Typography>
        <Button onClick={() => navigate("/login")} color="black">
          Login
        </Button>
        <Button onClick={() => navigate("/register")} color="black">
          Register
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
