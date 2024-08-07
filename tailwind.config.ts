import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poetsen-one': ['var(--font-poetsen-one)'],
      },
      backgroundImage: {
        'gradient-linear': "linear-gradient(0deg, rgba(1, 60, 78, 0.70) 0%, rgba(1, 60, 78, 0.70) 100%), url('https://www.figma.com/file/tN781Kc4g3875JdU7xNoVf/image/9fa24e883c36ec97ca168ec6491665da832b1a74')",
        'gradient-radial':
          "url('https://www.figma.com/file/tN781Kc4g3875JdU7xNoVf/image/6a46af15709a0d26a86e2c5438a9892e860c05c9?fuid=1400748495039934185'), radial-gradient(66.27% 100% at 50% 0%, #00B4CC 0%, #008597 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
