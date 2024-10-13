/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundText: {
        'gradient-to-r-slate': 'linear-gradient(to right, #0f172a, #334155)',
      },
    },
  },
  plugins: [],
}
