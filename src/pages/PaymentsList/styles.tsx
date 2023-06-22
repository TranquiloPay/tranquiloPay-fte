import { styled } from "@stitches/react";

const Container = styled("div", {
  boxShadow: "0rem 0.125rem 0.5rem 0rem rgba(0,0,0,.08);",
  width: "80vw",
  borderRadius: "14px 14px 0 0",
  background: "White",
});

const ContainerContent = styled("div", {
  margin: '0 0 0 72px !important',
  display: "flex",
  flexDirection: "column",

    // Estilos para o breakpoint 'xs' com largura mínima de 0px
    "@media (min-width: 0px) and (max-width: 415px)": {
      margin: '120px 0 0 0 !important',
    },
  
    // Estilos para o breakpoint 'sm' com largura mínima de 400px
    "@media (min-width: 416px) and (max-width: 550px)": {
      margin: '120px 0 0 0 !important',
    },
  
    // Estilos para o breakpoint 'md' com largura mínima de 960px
    "@media (min-width: 551px) and (max-width: 768px)": {
      margin: '120px 0 0 0 !important',
    },
  
    // Estilos para o breakpoint 'lg' com largura mínima de 1280px
    "@media (min-width: 769px) and (max-width: 1280px)": {
    },
});

const ContainerTable = styled("div", {
  boxShadow: "0rem 0.125rem 0.5rem 0rem rgba(0,0,0,.08);",
  width: "80vw",
  height: "65vh",
  background: "White",
  overflow: "auto",

  '&::-webkit-scrollbar': {
    width: '10px',
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: '16px',
    backgroundColor: 'rgba(0, 0, 0, .1)',
  },

  '&::-webkit-scrollbar-thumb:hover': {
    backgroundColor: 'rgba(0, 0, 0, .2)',
  },
});

const Header = styled("header", {
  display: "flex",
  background: "White",
  justifyContent: "space-between",
  borderRadius: "14px",
  alignItems: "center",
  padding: "24px",
});

const Footer = styled("div", {
  boxShadow: "0rem 0.125rem 0.5rem 0rem rgba(0,0,0,.08);",
  display: "flex",
  justifyContent: "space-between",
  height: '10px',
  backgroundColor: "white",
  borderRadius: "0 0 14px 14px",
});

export { ContainerTable, Header, Container, Footer, ContainerContent };
