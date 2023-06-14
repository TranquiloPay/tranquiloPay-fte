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
  borderRadius: "0 0 14px 14px",
  maxHeight: "65vh",
  background: "White",
  margin: "0 0 0 5vw",
  overflow: "auto",
});

const Header = styled("header", {
  display: "flex",
  background: "White",
  justifyContent: "space-between",
  borderRadius: "14px",
  alignItems: "center",
  padding: "24px",
});

export { ContainerTable, Header, Container };
