import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  body: {
    maxWidth: "1036px",
    margin: "0 auto",
    backgroundColor: "white",
    fontFamily: "Open Sans, sans-serif",
    fontStyle: "normal",
    "& h1, h2, h3, h4": {
      margin: 0,
    },
  },
});
