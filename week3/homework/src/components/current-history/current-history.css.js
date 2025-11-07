import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { color } from "@styles/token/color.css";

export const currentHistoryContainer = style({
  display: "flex",
  justifyContent: "space-between",
  alignContent: "center",
  width: "100%",
  padding: "1rem",
  borderRadius: "8px",
  backgroundColor: color.blue200,
});

export const cardValue = recipe({
  variants: {
    successState: {
      true: { color: color.blue600 },
      false: { color: color.red100 },
    },
  },
});
