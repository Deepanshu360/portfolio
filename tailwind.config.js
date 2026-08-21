/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        bg: "#050816",
        surface: "#0B1220",
        accent: "#22D3EE",
        success: "#22C55E",
        text: "#E6EEF8",
        muted: "#94A3B8",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(135deg, #4F8CFF, #7C5CFF)",
        "hero-gradient": "radial-gradient(ellipse at 60% 40%, rgba(79,140,255,0.15) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(124,92,255,0.1) 0%, transparent 50%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
