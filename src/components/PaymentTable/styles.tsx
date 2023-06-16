import TableCell from "@material-ui/core/TableCell";
import { styled } from "@stitches/react";

const StyledTableCell = styled(TableCell, {
  variants: {
    isDone: {
      true: {
        color: "LimeGreen !important",
      },
    },
  },
});

export { StyledTableCell };
