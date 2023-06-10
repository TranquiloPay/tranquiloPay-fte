import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/Auth";

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
          variant="h6"
          style={{ color: "black", cursor: "pointer" }}
        >
          TranquiloPay
        </Typography>
        {!token ? (
          <>
            <div>
              <Button onClick={() => navigate("/login")} color="black">
                Login
              </Button>
              <Button onClick={() => navigate("/register")} color="black">
                Register
              </Button>
            </div>
          </>
        ) : (
          <Button onClick={() => Logout()} color="black">
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
