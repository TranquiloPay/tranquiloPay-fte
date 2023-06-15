import { styled } from "@stitches/react";

const Container = styled("div", {
  boxShadow: "0rem 0.125rem 0.5rem 0rem rgba(0,0,0,.08);",
  width: "80vw",
  borderRadius: "14px 14px 0 0",
  background: "White",
  margin: "0 0 0 5vw",
});

const ContainerTable = styled("div", {
  boxShadow: "0rem 0.125rem 0.5rem 0rem rgba(0,0,0,.08);",
  height: "65vh",
  background: "White",
  margin: "0 0 0 5vw",
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
  margin: "0 0 0 5vw",
  backgroundColor: "white",
  borderRadius: "0 0 14px 14px",
});

export { ContainerTable, Header, Container, Footer };
