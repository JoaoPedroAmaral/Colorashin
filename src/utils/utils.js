import { clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-family": [{ font: ["chango", "sans"] }],
      colors: [
        {
          bg: [
            "mainBg",
            "secondaryBg",
            "brandPink",
            "brandYellow",
            "brandGreen",
            "brandBlue",
            "brandPinkDark",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs) {
  return customTwMerge(clsx(inputs));
}
