import { globalCss, styled } from "@stitches/react";

export const globalStyles = globalCss({
  body: {
    maxWidth: "1036px",
    margin: "0 auto",
    backgroundColor: "rgb(247, 247, 247)",
    fontFamily: "Open Sans, sans-serif",
    fontStyle: "normal",
    "& h1, h2, h3, h4": {
      margin: 0,
    },
  },
});

export const LoadingWrapper = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "60vh",
  width: "100%",
});


export const visibilityConfig = {
  variants: {
    isVisible: {
      false: {
        display: 'none',
      },
      true: {
        display: 'flex',
      },
    },
  },
};