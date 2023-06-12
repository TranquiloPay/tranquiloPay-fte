import { styled } from "@stitches/react";
import Input from "../../components/Input";

const Container = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "White",
  borderRadius: "14px",
  height: "55vh",
  padding: "24px",
  boxShadow: "rgba(0, 0, 0, 0.08) 0rem 0.125rem 0.5rem 0rem",

  "&::-webkit-scrollbar": {
    display: "none",
  },
});

const ContainerForm = styled("div", {
  width: "50%",
  paddingTop: "50px",

  h2: {
    fontWeight: 600,
    marginBottom: "30px",
  },

  form: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",

    p: {
      color: "var(--gray-50)",
      fontSize: "14px",
      margin: "10px auto",
    },
  },
});

const StyledContainer = styled("div", {
  padding: "20px",
});

const StyledInput = styled(Input, {
  fontSize: "18px",
  alignContent: "center",
});

export { ContainerForm, Container, StyledContainer, StyledInput };
