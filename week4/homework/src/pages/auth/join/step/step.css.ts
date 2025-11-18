import { style } from "@vanilla-extract/css";

import { color } from "@shared/styles/token/color.css";

export const title = style({
  fontSize: "2rem",
  fontWeight: "800",
  marginBottom: "1.8rem",
});

export const filedContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  marginBottom: "2.5rem",
});

export const inputTitle = style({
  fontSize: "1.4rem",
});

export const errorMessage = style({
  color: color.error,
  fontSize: "1.4rem",
  marginBottom: "0.8rem",
});
