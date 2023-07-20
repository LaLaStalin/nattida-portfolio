/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      text: {
        primaryDark: "#f9f9f9",
        primaryLight: "#",
        secondaryDark: "#988E9F",
        secondaryLight: "#",
      },
      primary: {
        mainDark: "#5918df",
        mainLight: "#",
      },
      while: "#ffffff",
    },

    fontFamily: {
      robotoCondensed: ["Roboto Condensed"],
      roboto: ["Roboto Condensed", "Lato", "Arial", "sans-serif"],
      palatino: ["Palatino", "Georgia", "Times New Roman", "Times", "serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "nav-linear":
          "background: linear-gradient(180deg, #100E17 0%, rgba(16, 14, 23, 0.00) 100%)",
      },
    },
  },
  plugins: [],
};
