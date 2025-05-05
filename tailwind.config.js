/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        Space:['Space Age','sans-serif']
      },
      screens:{
        'xs':'480px',
        'sm':'640px',
        'md':'768px',
        'lg':'1024px',
        'xl':'1160px',
        'xxl':'1440px',
      }
      
    },
  },
  plugins: [],
}

