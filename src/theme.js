import { useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const tokens = () => ({
    pie: {
        yellow: "#ffd700",
        blue: "#4c6edb",
        green: "#7acb6e",
        red: "#e74c3c",
        orange: "#ff8c00",
    },

    brand: {
        black: "#000000",
        grey: "333c4e",
        white: "#ffffff",
        green: "#005027",
        border: "#dadada",
    },
});

export const useMode = () => {
    const theme = useMemo(() => createTheme(), []);

    return [theme];
};
