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
});

export const useMode = () => {
    const theme = useMemo(() => createTheme(), []);
    return [theme];
};
