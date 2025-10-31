/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        geist: "var(--font-geist-sans)",
        geistMono: "var(--font-geist-mono)",
        cinzel: "var(--font-cinzel)",
        marcellus: "var(--font-marcellus)",
        italianno: "var(--font-italianno)",
      },
    },
  },
  plugins: [],
};
