import { createTheme } from "@mui/material";


export const appTheme = createTheme({
    palette: {
        primary: {
            main: "#23d9b5",
            contrastText: "#ffffff",
            dark: "#00a570",
            light: "#d4f6ee",
            "50": "#d4f6ee",
            "100": "#94e8d2",
            "200": "#23d9b5",
            "300": "#00c697",
            "400": "#00b583",
            "500": "#00a570",
            "600": "#009863",
            "700": "#008753",
            "800": "#007645",
            "900": "#005928",
        },
        background: {
            paper: "#ffffff",
            default: "#f5f5f5",
        },
        secondary: {
            main: "#EDEDED",
        },
        grey: {
            "50": "#EDEDED",
            "100": "#B3B3B3",
            "200": "#666666",
            "300": "#000000",
            "400": "#7A7A7A",
        },
        info: {
            main: "#000000",
        },
        error: {
            main: "#EE3859",
        },
        success: {
            main: "#23D9B4",
        },
        common: {
            black: "#1D1D1D",
        },
    },
});
