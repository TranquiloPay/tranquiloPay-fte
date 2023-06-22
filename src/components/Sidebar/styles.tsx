import { styled } from "@stitches/react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const ContainerDesktop = styled("div", {
  display: "none",
  // Estilos para o breakpoint 'lg' com largura mínima de 1280px
  "@media (min-width: 769px)": {
    display: "initial",
  },
});

const ContainerMobile = styled("div", {
  display: "none",
  // Estilos para o breakpoint 'xs' com largura mínima de 0px
  "@media (max-width: 768px)": {
    display: "initial",
  },
});

const SidebarWrapper = styled(Box, {
  display: "flex",
  position: "fixed",
  flexDirection: "column",
  overflow: "hidden",
  left: "0px",
  top: "75px",
  backgroundColor: "White",
  zIndex: 9000,
  height: "75vh",
  padding: "0.75rem",
  boxShadow: "0rem 0.5rem 1.5rem 0rem rgba(0,0,0,.16)",
  borderRadius: "2rem",
  margin: "1rem",
});

const IconMobileContainer = styled("div", {
  display: "flex",
  position: "fixed",
  overflow: "hidden",
  left: "0px",
  top: "60px",
  zIndex: 9000,
  padding: "0.75rem",
  boxShadow: "0rem 0.5rem 1.5rem 0rem rgba(0,0,0,.16)",
  borderRadius: "2rem",
  margin: "1rem",
});

const WhiteSpaceBorderRadius = styled(Box, {
  width: "100%",
  borderRadius: "1000px",
});

const SidebarLink = styled("a", {
  display: "flex",
});

const SidebarTypograph = styled(Typography, {
  alignItems: "center",
});

const StyledCollapse = styled("div", {
  width: "28px",
  display: "flex",
  marginTop: "0.50rem",
  marginLeft: "0",
  paddingTop: "0.25rem",
  paddingRight: "0.5rem",
  paddingLeft: "0.5rem",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "120px",
  cursor: "pointer",
  transition: "0.2s",
  flexDirection: "column",
  marginBottom: `20px`,
  height: "30px",

  "@media (min-width: 769px)": {
    height: "auto",
  },

  "&:hover": {
    backgroundColor: "rgb(209, 158, 67)",
  },

  variants: {
    isOpen: {
      true: {
        width: `282px`,
        alignItems: "self-start",
      },
      false: {
        width: `28px`,
      },
    },
    isNotVisible: {
      true: {
        display: "none",
      },
      false: {
        display: "flex",
      },
    },
  },
});

const SidebarIcon = styled("span", {});

export {
  SidebarWrapper,
  WhiteSpaceBorderRadius,
  SidebarLink,
  SidebarIcon,
  StyledCollapse,
  SidebarTypograph,
  IconMobileContainer,
  ContainerMobile,
  ContainerDesktop,
};
