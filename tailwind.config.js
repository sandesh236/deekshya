module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans:    ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
        // legacy aliases
        primary: ['Fraunces', 'Georgia', 'serif'],
        body:    ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Deekshya brand — deep blue accent
        blue:    '#014C8F',
        'blue-hover': '#013970',
        'blue-soft':  'rgba(1, 76, 143, 0.08)',
        'blue-border':'rgba(1, 76, 143, 0.18)',

        // Surfaces
        cream:   '#FAF9F7',
        'gray-subtle': '#F4F3F0',
        'gray-line':   '#E8E5E0',

        // Text
        ink:     '#0E0E0E',
        'ink-2': '#3A3A3A',
        'ink-3': '#787878',
        'ink-4': '#B0ADA8',

        // Legacy (keep for any untouched classes)
        primary:    '#014C8F',
        secondary:  '#014C8F',
        background: '#FAF9F7',
      },
      spacing: {
        120: '30rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
