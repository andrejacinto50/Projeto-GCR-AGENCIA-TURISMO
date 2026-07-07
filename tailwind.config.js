/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'ocean-deep': '#0B3D42',
        'ocean-mid': '#145C61',
        'ocean-light': '#1F7A80',
        sand: '#F2E8D5',
        'sand-light': '#FAF5EA',
        gold: '#D9A441',
        'gold-light': '#EAC272',
        coral: '#E76F51',
        ink: '#0F211D',
        foam: '#FDFBF6',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Work Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        'ocean-gradient': 'linear-gradient(160deg, #0B3D42 0%, #145C61 55%, #1F7A80 100%)',
        'sand-gradient': 'linear-gradient(180deg, #FAF5EA 0%, #F2E8D5 100%)',
      },
      boxShadow: {
        card: '0 20px 45px -20px rgba(11, 61, 66, 0.35)',
        gold: '0 12px 30px -10px rgba(217, 164, 65, 0.55)',
      },
    },
  },
  plugins: [],
}
