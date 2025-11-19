import { recipe } from "@vanilla-extract/recipes";

import { color } from "@shared/styles/token/color.css";

export const buttonContainer = recipe({
  base: {
    width: "100%",
    padding: "0.8rem 1rem",
    borderRadius: "8px",
    color: color.white,
    fontSize: "1.6rem",
    fontWeight: "600",
  },
  variants: {
    disabled: {
      true: {
        backgroundColor: color.blue100,
      },
      false: {
        backgroundColor: color.blue200,
        ":hover": {
          backgroundColor: color.blue300,
          transition: "0.2s ease",
        },
      },
    },
  },
});
