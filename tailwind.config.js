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
      borderRadius: {
        '4xl': '32px',
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
        'products-hero': "linear-gradient(rgba(243,244,246,0.65), rgba(243,244,246,0.65)), url('/images/products-bg.png')",
        'dashboard': " url('/images/dashboard.jpg')",
        'category-right': "linear-gradient(rgba(0,0,0,0.6) 33.85% , rgba(243,244,246,0.1)) ,url('/images/categories/category-right.jpg')",
        'category-left': "linear-gradient(rgba(0,0,0,0.6) 33.85% , rgba(243,244,246,0.1))  ,url('/images/categories/category-left.jpg')"
      },
      screens: {
        "xs": "480px",
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px",
        "3xl": "1792px"
      },
      spacing: {
        "4.5":"1.125rem",
        "25": "6.25rem",
        "30": "7.5rem",
        "50": "12.5rem",
      },
    },
  },

  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
      addVariant("before", "&::before");
      addVariant("after", "&::after");
    },
    require("tailwind-scrollbar")({ nocompatible: true }),
    "prettier-plugin-tailwindcss"
  ],
};
