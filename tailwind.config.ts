import type { Config } from "tailwindcss";
import AnimationPlugin from "tailwindcss-animate";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        mono: ["JetBrains Mono", ...fontFamily.mono],
      },
    },
  },
  plugins: [AnimationPlugin],
} satisfies Partial<Config>;
