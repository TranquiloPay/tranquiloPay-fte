import { styled } from "../../styles/stitches";

export const Container = styled("div", {
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

  span: {
    color: "var(--negative)",
    fontSize: "10px",
    paddingLeft: "5px",
  },
});

export const ContainerInput = styled("div", {
  width: "100%",
  height: "60px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "0px 15px",
  background: "var(--gray-0)",
  boxSizing: "border-box",
  borderRadius: "8px",
  border: "2px solid #333333",
});
