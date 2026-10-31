/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./App.tsx",
    ],
    darkMode: 'selector',
    theme: {
        extend: {
            colors: {
                "primary": "#000000",
                "secondary-grey": "#2a2a2a",
                "accent-gold": "#D4AF37",
                "background-light": "#f8f8f8",
                "background-dark": "#0a0a0a",
                "legal-black": "#050505",
            },
            fontFamily: {
                "display": ["Inter", "system-ui", "-apple-system", "sans-serif"],
                "sans": [
                    "Inter",
                    "system-ui",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "Roboto",
                    "Helvetica Neue",
                    "Arial",
                    "sans-serif"
                ]
            }
        },
    },
    plugins: [],
}
