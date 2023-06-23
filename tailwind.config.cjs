/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne'],
        spaceGrotesk: ['SpaceGrotesk'],
      },
      colors: {
        background: '#000000',
        foreground: '#ffffff',
        paragraph: '#999999',
        shadow: '#666666',
        highlight: '#ff0080',
      },
      backgroundImage: {
        'topo-texture-mobile': "url('/topo-texture-mobile.webp')",
        'topo-texture-desktop': "url('/topo-texture-desktop.webp')",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
