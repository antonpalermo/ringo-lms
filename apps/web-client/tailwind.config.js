const config = require('@packages/shared-ui/tailwind')

/**
 * @type { import('tailwindcss').Config }
 */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/shared-ui/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  presets: [config]
}
