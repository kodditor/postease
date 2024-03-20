import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        blue: '#0F172A',
        paleBlue: '#0F172A15',
        accentBlue: '#F1F5F9'
      }
    },
  },
  plugins: [],
} satisfies Config;
