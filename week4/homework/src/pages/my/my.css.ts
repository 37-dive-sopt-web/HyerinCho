import { style } from "@vanilla-extract/css";

export const memberAllContainer = style({
  display: "flex",
  flexDirection: "column",
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

export const usernameContainer = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "2rem",
});

export const username = style({
  fontSize: "1.8rem",
  fontWeight: 600,
});
