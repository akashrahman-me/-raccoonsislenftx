module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      "island-mobile": "linear-gradient(#034867 50%,#0b758b 0)",
      island: "linear-gradient(90deg,#024767 50%,#0b758b 0)",
      "roadmap-background": "url(/images/roadmap-bg.jpg)",
      "roadap-background-mmobile": "url(/images/roadmap-bg-mobile.jpg)",
      "button-orange": "url(/images/mint-orange.png)",
      "button-orange-disabled": "url(/images/mint-orange-disabled.png)",
      "button-yellow": "url(/images/yellow-button.png)",
      "button-yellow-disabled": "url(/images/yellow-button-disabled.png)",
    },
    colors: {
      white: "rgb(255, 255, 255)",
      black: "rgb(0, 0, 0)",
      brown: "rgb(70, 47, 44)",
      "dark-green": "rgb(44 56 62)",
      "milky-white": "rgb(255, 253, 240)",
      "light-black": "rgb(36, 36, 36)",
      "prussian-blue-mobile": "rgb(50, 61, 106)",
      "prussian-blue": "rgb(48, 59, 104)",
    },
    fontFamily: {
      thunder: ["Anton", "serif"],
      poppins: ["Poppins", "sans-serif"],
      "poppins-light": ["poppins-light", "sans-serif"],
      balgin: ["Luckiest Guy", "serif"],
    },
  },
  plugins: [],
};
