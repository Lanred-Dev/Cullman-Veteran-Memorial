import aspectRatio from "@tailwindcss/aspect-ratio";
import containerQueries from "@tailwindcss/container-queries";
import forms from "@tailwindcss/forms";
import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    darkMode: "class",

    theme: {
        fontFamily: {
            FunnelSans: ["Funnel Sans", "sans-serif"],
        },

        extend: {
            backgroundColor: {
                primary: {
                    light: {
                        DEFAULT: "#F9F9F9",
                        50: "#F9F9F9",
                        100: "#F6F6F6",
                        200: "#F1F1F1",
                        300: "#ECECEC",
                        400: "#E7E7E7",
                        500: "#E2E2E2",
                        600: "#DDDDDD",
                        700: "#D8D8D8",
                        800: "#D3D3D3",
                        900: "#CECECE",
                        950: "#CBCBCB",
                    },

                    dark: {
                        DEFAULT: "#131313",
                        50: "#393939",
                        100: "#373737",
                        200: "#323232",
                        300: "#2D2D2D",
                        400: "#272727",
                        500: "#222222",
                        600: "#1D1D1D",
                        700: "#181818",
                        800: "#131313",
                        900: "#0E0E0E",
                        950: "#0B0B0B",
                    },
                },

                button: {
                    dark: {
                        primary: "#1F3B73",
                        secondary: "#F5DEB3",
                    },
                },

                divider: {
                    light: "#CBCBCB",
                    dark: "#393939",
                },
            },

            textColor: {
                primary: {
                    light: {
                        DEFAULT: "#000000",
                        50: "#737373",
                        100: "#6C6C6C",
                        200: "#606060",
                        300: "#535353",
                        400: "#464646",
                        500: "#393939",
                        600: "#2D2D2D",
                        700: "#202020",
                        800: "#131313",
                        900: "#060606",
                        950: "#000000",
                    },

                    dark: {
                        DEFAULT: "#FFFFFF",
                        50: "#FFFFFF",
                        100: "#F9F9F9",
                        200: "#ECECEC",
                        300: "#DFDFDF",
                        400: "#D2D2D2",
                        500: "#C6C6C6",
                        600: "#B9B9B9",
                        700: "#ACACAC",
                        800: "#9F9F9F",
                        900: "#939393",
                        950: "#8C8C8C",
                    },
                },
            },

            borderColor: {
                primary: {
                    light: {
                        DEFAULT: "#F9F9F9",
                        50: "#F9F9F9",
                        100: "#F6F6F6",
                        200: "#F1F1F1",
                        300: "#ECECEC",
                        400: "#E7E7E7",
                        500: "#E2E2E2",
                        600: "#DDDDDD",
                        700: "#D8D8D8",
                        800: "#D3D3D3",
                        900: "#CECECE",
                        950: "#CBCBCB",
                    },

                    dark: {
                        DEFAULT: "#131313",
                        50: "#393939",
                        100: "#373737",
                        200: "#323232",
                        300: "#2D2D2D",
                        400: "#272727",
                        500: "#222222",
                        600: "#1D1D1D",
                        700: "#181818",
                        800: "#131313",
                        900: "#0E0E0E",
                        950: "#0B0B0B",
                    },
                },
            },

            ringColor: {
                dark: "#1F3B73",
            },

            borderWidth: {
                primary: "2px",
            },

            borderRadius: {
                primary: "15px",
                button: "10px",
            },
        },
    },

    plugins: [forms, containerQueries, aspectRatio],
} satisfies Config;
