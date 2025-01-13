import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkGrey: 'rgb(174 169 177)',
      },
      fontFamily: {
				lexend: [
					'var(--font-lexend)'
				],
				poppins: ["Poppins", 'serif']
			},
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, rgba(3, 5, 22, 0) 20%, rgb(3, 5, 22) 80%)',
        'cards-gradient': 'linear-gradient(0deg, rgb(12, 38, 69) 20%, rgb(3, 5, 22) 70%)',
        'project-gardient': 'linear-gradient(rgb(12, 38, 69) 20%, rgb(3, 5, 22) 60%)',
        'contact-gradient': 'linear-gradient(0deg, rgb(7, 22, 38) 20%, rgb(3, 5, 22) 69%)',
        'navbar-gradient': 'linear-gradient(0deg, rgb(7, 22, 38, 0) 20%, rgb(7, 22, 38) 85%)',
        'secondarBg': 'rgb(7 22 38)',
        'primaryBg': 'rgb(3 5 22)'
      },
      backgroundColor: {
        'client-color': 'rgb(12 38 69 / var(--tw-bg-opacity))',
        'darkGrey': 'rgb(174 169 177 / var(--tw-text-opacity))'
      },
      keyframes: {
        customAnimate: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        customAnimate: 'customAnimate 0.3s cubic-bezier(.4,0,.2,1) both',
        pulse: 'pulse 2s cubic-bezier(.4,0,.6,1) infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
