//paste here your theme]
import { createTheme } from "@mui/material/styles";

export const themeOptions = {
    palette: {
        type: 'dark',
        mode: 'dark',
        primary: {
            main: '#9e150',
        },
        secondary: {
            main: '#f5057',
        },
        warning: {
            main: '#ff800',
        },
    },
};

const theme=createTheme(themeOptions);
export default theme