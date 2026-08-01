/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Colors wired to CSS variables so they can be changed dynamically
        blood: {
          50: "var(--color-blood-50, #fff1f1)",
          100: "var(--color-blood-100, #ffe0e0)",
          300: "var(--color-blood-300, #ff7878)",
          500: "var(--color-blood-500, #e50914)",
          600: "var(--color-blood-600, #be0610)",
          700: "var(--color-blood-700, #8f040c)",
          900: "var(--color-blood-900, #3f0207)",
        },
        coal: "var(--color-coal, #08080a)",
        iron: "var(--color-iron, #17171b)",
        ash: "var(--color-ash, #b8b8c2)",
      },
      boxShadow: {
        glow: "0 0 48px rgba(var(--color-blood-rgb, 54,147,244), 0.32)",
        hard: "0 20px 70px rgba(var(--color-coal-rgb, 8,8,10), 0.45)",
      },
      animation: {
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "scan-line": "scanLine 6s linear infinite",
        "fade-up": "fadeUp 0.8s ease-out both",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
        scanLine: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
