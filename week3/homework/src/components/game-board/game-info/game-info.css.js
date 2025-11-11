import { style } from "@vanilla-extract/css";

import { color } from "@styles/token/color.css";

export const recentProgress = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.5rem",
  padding: "1rem",
  width: "100%",
  backgroundColor: color.blue200,
  borderRadius: "8px",
});

export const recentProgressNumber = style({
  fontSize: "1.5rem",
  fontWeight: "900",
  color: color.blue600,
});
