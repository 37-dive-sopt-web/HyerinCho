import { style } from "@vanilla-extract/css";

import { color } from "@shared/styles/token/color.css";

export const input = style({
  padding: "0.8rem 1.2rem",
  border: `1px solid ${color.gray100}`,
  borderRadius: "8px",
  fontSize: "1.5rem",
});
