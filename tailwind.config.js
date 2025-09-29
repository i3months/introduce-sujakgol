/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eefaf7",
          100: "#d6f3ea",
          200: "#b0e6d6",
          300: "#7fd4be",
          400: "#4dbda3",
          500: "#26a589",
          600: "#1c8570",
          700: "#186a5b",
          800: "#135349",
          900: "#0f433c",
        },
      },
      maxWidth: {
        screenMobile: "420px", // 모바일 퍼스트 느낌 → 420px로 고정
      },
      borderRadius: {
        "2xl": "1.25rem", // 표준 Tailwind 네이밍 맞춤
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,.18)",
      },
      fontFamily: {
        sans: [
          '"SUITE"',
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Noto Sans KR",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
