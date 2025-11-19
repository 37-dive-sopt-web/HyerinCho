import { style } from "@vanilla-extract/css";

export const errorContainer = style({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const errorCode = style({
  fontSize: "5rem",
  fontWeight: "800",
  textAlign: "center",
});

export const errorMessage = style({
  fontSize: "2rem",
  marginTop: "2rem",
  textAlign: "center",
});
