/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#E5E7EB",
                secondary: "#374151",
                accent: "#A855F7",
                background: "#111828",
                hover: "#B77BEE",
            },
        },
    },
    plugins: [],
};
