import { Button } from "@mui/material";
import { styled } from "@stitches/react";

const StyledButton = styled(Button, {
  color: "Black",
  variants: {
    isNotVisible: {
      true: {
        display: "none !important",
      },
      false: {
        display: "flex",
      },
    },
  },
});

export { StyledButton };
