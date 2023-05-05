import { createContext, useState, ReactNode, useContext } from "react";
import { useUser } from "../User";
import { login } from "../../services/login/loginService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface AuthProps {
  children: ReactNode;
}

interface UserData {
  email: string;
  password: string;
}

interface AuthProviderData {
  token: string;
  signIn: (data: UserData) => void;
  Logout: () => void;
}

export const AuthContext = createContext<AuthProviderData>(
  {} as AuthProviderData
);

export const AuthProvider = ({ children }: AuthProps) => {
  const { setUser } = useUser();
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@token:tranquilopay")!) || ""
  );
  const navigate = useNavigate();

  const signIn = (data: UserData) => {
    login(data)
      .then((response) => {
        localStorage.clear();
        setToken(response.token);
        setUser(response.user);
        localStorage.setItem(
          "@token:tranquilopay",
          JSON.stringify(response.token)
        );
        toast.success("Login efetuado com sucesso!");
        setTimeout(() => navigate("/dashboard"), 700);
      })
      .catch(() => toast.error("E-mail ou senha incorretos!"));
  };

  const Logout = () => {
    localStorage.clear();
    setToken("");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, signIn, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
