/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: { max: "640px" },

            md: { max: "768px" },

            lg: { max: "1024px" },

            xl: { max: "1280px" },
        },
        extend: {},
    },
    plugins: [require("daisyui")],
};
