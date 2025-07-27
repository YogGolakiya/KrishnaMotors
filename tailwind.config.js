/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                'float-slow': 'float 10s ease-in-out infinite',
                'float-medium': 'float 6s ease-in-out infinite',
                'float-fast': 'float 4s ease-in-out infinite',
                'fade-pulse': 'pulse 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
            colors: {
                navy: {
                    50: '#f5f8fc',
                    100: '#dbe7f5',
                    200: '#b7d0ea',
                    300: '#91b7dd',
                    400: '#6a9bd0',
                    500: '#487ec3',
                    600: '#3563a5',
                    700: '#274d84',
                    800: '#1b3863',
                    900: '#102343',
                },
            },
        },
    },
    plugins: [],
}