import { styled } from "@stitches/react";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const SidebarWrapper = styled(Box, {
  width: "140px",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  position: "fixed",
  top: "65px",
  left: "20px",
  marginTop: "10px",
  zIndex: 999999,
  borderRadius: "1000px",
  height: "90vh",
  boxShadow: "0px 0px 6px 2px rgba(0, 0, 0, 0.3)", // Adicione essa linha para a sombra
});

const WhiteSpaceBorderRadius = styled(Box, {
  width: "100%",
  height: "50px",
  borderRadius: "1000px",
});

const SidebarLink = styled("a", {
  display: "flex",
  alignItems: "center",
  padding: "8px",
  textDecoration: "none",
  color: "inherit",
  transition: "background-color 0.3s",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#e0e0e0",
  },
});

const SidebarIcon = styled("span", {
  marginRight: "8px",
});

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <SidebarWrapper>
      <WhiteSpaceBorderRadius />
      <SidebarLink
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        <SidebarIcon>🏠</SidebarIcon>
        Home
      </SidebarLink>
      <SidebarLink
        onClick={() => {
          navigate("/paymentsList");
        }}
      >
        <SidebarIcon>💳</SidebarIcon>
        Pagamentos
      </SidebarLink>
      <SidebarLink
        onClick={() => {
          navigate("/payments");
        }}
      >
        <SidebarIcon>💰</SidebarIcon>
        Gerar Pagamentos
      </SidebarLink>
      <WhiteSpaceBorderRadius />
    </SidebarWrapper>
  );
};

export default Sidebar;
