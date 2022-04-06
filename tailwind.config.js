const plugin = require('tailwindcss/plugin');

module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true,
            padding: '128px',
        },
        extend: {
            colors: {
                gray: {
                    200: '#ECEBEB',
                    50: '#FBF8F8',
                    500: '#989393',
                    800: '#3F3B3B',
                },
                red: {
                    500: '#FF6D7F',
                },
                orange: {
                    300: '#FEC384',
                    500: '#FFA84B',
                    900: '#AD5900',
                    DEFAULT: '#FFA84B',
                },
                purple: {
                    800: '#5C59CA',
                },
                blue: {
                    800: '#00124C',
                },
            },
            fontFamily: {
                sans: ['DM Sans', 'sans-serif'],
            },
            fontSize: {
                sm: ['14px', '20px'],
                base: ['15px', '24px'],
                lg: ['22px', '31px'],
                xl: ['34px', '40px'],
                '2xl': ['55px', '60px'],
            },
        },
    },
    plugins: [
        plugin(function ({ addBase }) {
            addBase({
                '*': {
                    '-webkit-font-smoothing': ['antialiased'],
                    '-moz-osx-font-smoothing': ['grayscale'],
                    '@apply text-blue-800 text-base': {},
                },
                h1: {
                    '@apply text-xl font-medium tracking-wide text-blue-800':
                        {},
                },
                h2: {
                    "@apply text-lg font-medium tracking-wide text-blue-800 before:content-['#'] before:absolute before:-ml-8 before:text-purple-800":
                        {},
                },
                'h1, h2, h3, h4, p': {
                    '@apply max-w-[500px] pb-6': {},
                },
                'p + h1, p + h2, p + h3, p + h4': {
                    '@apply pt-16': {},
                },
                '#sidebar *': {
                    '@apply text-sm font-medium  leading-[35px]': {},
                },
                '#sidebar a': {
                    '@apply text-white hover:text-blue-900 transition duration-100 hover:pl-1 pl-0 block':
                        {},
                },
                '#sidebar h3': {
                    '@apply text-orange-900 pb-0 font-semibold pl-6': {},
                },
                '#sidebar li': {
                    '@apply pl-6': {},
                },
                '#sidebar li ul a': {
                    "@apply before:content-['#'] before:pr-2 before:text-purple-800":
                        {},
                },
                '#sidebar li.active': {
                    '@apply bg-white bg-orange-300 pb-2 border-l-[3px] border-white':
                        {},
                },
                '#sidebar li.active > a': {
                    '@apply text-purple-800 block': {},
                },
                '#sidebar li.active li a': {
                    '@apply text-gray-800 hover:text-purple-800': {},
                },
                'main div': {
                    '@apply  max-w-[600px]': {},
                },
                'p code': {
                    '@apply px-2 bg-orange-300 py-1 mx-1 rounded-[4px]': {},
                },
                pre: {
                    'white-space': ['pre'],
                    '@apply mb-16 bg-blue-800  max-w-[600px] rounded-[15px] py-4 px-5 text-sm':
                        {},
                },
                'pre code': {
                    '@apply text-white': {},
                },
                '.alert': {
                    "@apply bg-orange-300 px-4 py-4 text-sm rounded-[10px] before:content-['!'] before:absolute before:-ml-14 before:-mt-4 before:text-white before:w-8 before:h-8 before:rounded-full before:bg-purple-800 before:flex before:items-center before:justify-center before:font-semibold":
                        {},
                },
                'pre, .alert': {
                    '@apply mix-blend-overlay': {},
                },
            });
        }),
    ],
};
