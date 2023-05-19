import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const AppHeader = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="fixed" style={{ width: "100%" }}>
      <Toolbar>
        <Typography
          onClick={() => navigate("/")}
          variant="h6"
          style={{ flexGrow: 1, cursor: "pointer" }}
        >
          TranquiloPay
        </Typography>
        <Button onClick={() => navigate("/login")} color="inherit">
          Login
        </Button>
        <Button onClick={() => navigate("/register")} color="inherit">
          Register
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
