import { styled } from "../../styles/stitches";

export const Container = styled("button", {
  background: "black",
  fontSize: "16px",
  color: "white",
  width: "100%",
  height: "60px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",

  "&:hover": {
    transition: "0.5s",
    background: "gray",
  },
});
