module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            screens: {
                xs: "475px",
                "3xl": "1600px",
            },
            colors: {
                "egyptian-blue": "#0D28A6",
                "hawkes-blue": "#CFD4ED",
                "hawkes-dblue": "#7685CC",
                "venetian-red": "#D00C1A",
                "binar-red": "#D00C1A1A",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
