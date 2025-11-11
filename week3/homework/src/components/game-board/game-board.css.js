import { style } from "@vanilla-extract/css";

import { color } from "src/styles/token/color.css";

export const gameBoardContainer = style({
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gap: "3rem",
  backgroundColor: color.blue200,
  borderRadius: "10px",
  padding: "2rem",
});
