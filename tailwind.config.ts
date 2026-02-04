import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#1e1e1e',
        foreground: '#d4d4d4',
        card: '#252526',
        'card-foreground': '#d4d4d4',
        popover: '#252526',
        'popover-foreground': '#d4d4d4',
        primary: '#a3be8c',
        'primary-foreground': '#1e1e1e',
        secondary: '#3a3a3a',
        'secondary-foreground': '#d4d4d4',
        muted: '#3a3a3a',
        'muted-foreground': '#808080',
        accent: '#5e81ac',
        'accent-foreground': '#d4d4d4',
        destructive: '#ff0040',
        'destructive-foreground': '#ffffff',
        border: '#3a3a3a',
        input: '#3a3a3a',
        'input-background': '#252526',
        'switch-background': '#3a3a3a',
        ring: '#a3be8c',
      },
    },
  },
} satisfies Config
