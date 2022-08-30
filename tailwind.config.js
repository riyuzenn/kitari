/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: "class",
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        colors: {
            inv: "transparent",
            primary: "#e7e7e7",
            warning: "#B7976A",

            // Dark mode color palatte
            dbg: "#0c0c0c",
            dfg: "#a0a0a0",
            dsec: "#121212",
            daccent_1: "#151515",
            daccent_2: "#191919",
            daccent_3: "#212121",
            daccent_4: "#252525",

            lbg: "#",
            lfg: "#",
            lsec: "#",
            laccent_1: "#",
            laccent_2: "",
            laccent_3: "",
            laccent_4: "",
        },
    },
    plugins: [],
};
