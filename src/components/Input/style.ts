import { styled } from "../../styles/stitches";

const Container = styled("div", {
  width: "100%",
  height: "85px",
  display: "flex",
  flexDirection: "column",

  input: {
    fontSize: "16px",
    background: "var(--gray-0)",
    border: "none",
    width: "100%",
    height: "100%",
    borderSize: "1px",
    outline: "none",
  },
});

const ContainerInput = styled("div", {
  width: "100%",
  height: "60px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "0px 15px",
  background: "var(--gray-0)",
  boxSizing: "border-box",
  borderRadius: "8px",
  border: "1px solid #333333",
});

const ErrorMessage = styled("span", {
  fontSize: "12px",
  paddingLeft: "5px",
  marginBottom: '2px',
  color: "Red",
});

export { Container, ContainerInput, ErrorMessage };
