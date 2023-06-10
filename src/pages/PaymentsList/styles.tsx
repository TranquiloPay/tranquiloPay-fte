import { styled } from "@stitches/react";

const Container = styled("div", {
  boxShadow: "0rem 0.125rem 0.5rem 0rem rgba(0,0,0,.08);",
  width: "100%",
  borderRadius: "14px",
  height: "65vh",
  background: "White",
});

const Header = styled("header", {
  display: "flex",
  background: "White",
  justifyContent: "space-between",
  borderRadius: "14px",
  alignItems: "center",
  padding: "24px",
});

export { Container, Header };
