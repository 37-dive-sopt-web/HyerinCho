import { style } from "@vanilla-extract/css";

import { color } from "src/styles/token/color.css";

export const homeContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  padding: "2rem 26rem",
  width: "100%",
  height: "100%",
  backgroundColor: color.blue100,

  "@media": {
    "(max-width: 1200px)": {
      padding: "2rem 14rem",
    },
    "(max-width: 900px)": {
      padding: "2rem 8rem",
    },
  },
});
