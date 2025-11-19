import { style } from "@vanilla-extract/css";

import { color } from "@shared/styles/token/color.css";

export const memberAllContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "80vh",
});

export const memberContainer = style({
  width: "45rem",
});

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

export const infoBoxContainer = style({
  marginTop: "2rem",
});

export const errorMessage = style({
  color: color.error,
  width: "100%",
  fontSize: "1.5rem",
  textAlign: "center",
  marginTop: "1rem",
});
