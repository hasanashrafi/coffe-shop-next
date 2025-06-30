/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
        },
      },
      boxShadow: {
        light: "0px 1px 10px 0px rgba(0, 0, 0, 0.05)",
        dark: " 0px 1px 10px 0px rgba(0, 0, 0, 0.05)",
      },
      keyframes: {
        steam: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "1" },
          "100%": { transform: "translateY(-20px) scale(0.5)", opacity: "0" },
        },
      },
      animation: {
        steam: "steam 2s ease-out infinite",
      },
      fontFamily: {
        Dana: "Dana",
        DanaMedium: "Dana Medium",
        DanaDemiBold: "Dana DemiBold",
        MorabbaLight: "Morabba light",
        MorabbaMedium: "Morabba Medium",
        MorabbaBold: "Morabba Bold",
      },
      letterSpacing: {
        tightest: "0.065em",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0.625rem",
        },
      },
      backgroundImage: {
        "home-mobile": "url(/images/headerBgMobile.webp)",
        "home-desktop": "url(/images/headerBgDesktop.webp)",
        "products": "url(/images/products-bg.png)",
      },
      screens:{
        "xs":"480px",
        "sm":"640px",
        "md":"768px",
        "lg":"1024px",
        "xl":"1280px",
        "2xl":"1536px",
        "3xl":"1792px"
      }
    },
  },

  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
