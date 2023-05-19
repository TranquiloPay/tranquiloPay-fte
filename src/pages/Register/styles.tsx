import { styled } from "@stitches/react";

export const Container = styled("div", {
display: "flex",
alignItems: "center",
justifyContent: "center",
overflowX: "hidden",

"& ::-webkit-scrollbar": {
display: "none"
}

});

export const FormContainer = styled("div", {
width: "90%",
maxWidth: "500px",

h1: {
fontSize: "24px",
fontWeight: "600",
marginBottom: "30px"
},

form: {
width: "100%",
display: "flex",
flexWrap: "wrap",
justifyContent: "space-between",

input: {
    marginBottom: "2px"
  },
  
  p: {
    color: "$gray-50",
    fontSize: "14px",
    margin: "10px auto"
  }
}
});