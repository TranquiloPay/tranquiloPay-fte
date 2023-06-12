import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  overflowX: "hidden",
  justifyContent: "space-between",
  backgroundColor: "White",
  borderRadius: "14px",
  height: "65vh",
  padding: "24px",
  boxShadow: "rgba(0, 0, 0, 0.08) 0rem 0.125rem 0.5rem 0rem",

  "& ::-webkit-scrollbar": {
    display: "none",
  },
});

export const FormContainer = styled("div", {
  width: "90%",
  maxWidth: "500px",

  h1: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "30px",
  },

  form: {
    input: {
      marginBottom: "2px",
    },

    p: {
      color: "$gray-50",
      fontSize: "14px",
      margin: "10px auto",
    },
  },
});
