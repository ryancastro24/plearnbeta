/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'forest': "url('/DashboardAssets/img/forest pixelate 0 (1).png')",
          'desert': "url('/DashboardAssets/img/desert.png')",
          'snow': "url('/DashboardAssets/img/snow.png')",
          'city': "url('/DashboardAssets/img/city.png')",
          'sea': "url('/DashboardAssets/img/sea.png')",
          
      },
    },
  },
  plugins: [],
}
