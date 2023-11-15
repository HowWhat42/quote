/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                accent: '#6466E9',
                primary: '#4A5567',
                dark: '#111729',
                grey: '#20293A',
            },
        },
    },
    plugins: [],
}

