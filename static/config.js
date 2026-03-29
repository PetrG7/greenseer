//tailwind config
tailwind.config = {
  theme: {
    extend: {
      colors: {
        'surface': '#060e20',
        'surface-container-low': '#091328',
        'surface-container': '#0f1930',
        'surface-container-high': '#141f38',
        'surface-container-highest': '#192540',
        'primary': '#6bff8f',
        'primary-dim': '#5bf083',
        'primary-container': '#0abc56',
        'on-primary': '#005f28',
        'on-surface': '#dee5ff',
        'outline-variant': '#40485d',
        'outline-ghost': 'rgba(109, 117, 140, 0.2)',
        'secondary-container': '#006e2d',
        'on-secondary-container': '#e4ffe2',
        'error': '#ff7351',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
      spacing: {
        '6': '1.3rem',
        '16': '3.5rem',
        '20': '4.5rem',
      }
    }
  }
}
