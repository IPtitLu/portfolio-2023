/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: { 
        colors: {
            "orange": "#FFC86B",
            "dark": "#34353A",
            "light-dark": "#3D3E42",
        },
        keyframes: {
          typing: {
            "0%": {
              width: "0%",
              visibility: "hidden"
            },
            "100%": {
              width: "100%"
            }  
          },
          blink: {
            "50%": {
              borderColor: "transparent"
            },
            "100%": {
              borderColor: "white"
            }  
          }
        },
        animation: {
            typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
        },
        backgroundImage: {
         'bg1': "url('../public/bg1.svg",
        },
        fontFamily: {
            sans: ["Helvetica", "Arial", "sans-serif"],
        },
            fontFamily: {
                montserrat: ["var(--font-MontserratAlt1)"],
                helvetica: ["var(--font-Helvetica)"],
            },
    },
  },
  plugins: [],
}
