/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: '18px',
        sm: '24px',
        lg: '40px',
      },
      backgroundImage: {
        "btn-gradient": "linear-gradient(130.88deg, #A854E9 -9.14%, #4F91FC 283.16%)",
        "gradientbg": "linear-gradient(235.8deg, #7F04E3 -12.6%, #FF006B 106.18%)",
      },
    },
  },
  plugins: [],
}
