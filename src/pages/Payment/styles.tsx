import { styled } from "../../styles/stitches";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "50vh",
});

export const PaymentForm = styled("form", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
});

export const Title = styled("h1", {
  fontSize: "24px",
  marginBottom: "20px",
});

export const Label = styled("label", {
  fontSize: "16px",
  marginBottom: "10px",
});

export const Input = styled("input", {
  width: "300px",
  padding: "10px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  marginBottom: "20px",
});

export const Button = styled("button", {
  backgroundColor: "#007bff",
  color: "#fff",
  padding: "10px 20px",
  borderRadius: "4px",
  border: "none",
  cursor: "pointer",
  fontSize: "16px",
});
