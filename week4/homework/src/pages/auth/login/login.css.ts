import { style } from "@vanilla-extract/css";

import { color } from "@shared/styles/token/color.css";

export const loginAllContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
});

export const loginBoxContainer = style({
  width: "45rem",
  display: "flex",
  flexDirection: "column",
});

export const title = style({
  fontSize: "2rem",
  fontWeight: "800",
  marginBottom: "1.8rem",
});

export const formContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "2.5rem",
});

export const filedContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const inputTitle = style({
  fontSize: "1.4rem",
});

export const joinText = style({
  color: color.blue200,
  fontSize: "1.4rem",
  fontWeight: "800",
  width: "100%",
  textAlign: "center",
  marginTop: "0.5rem",
});
