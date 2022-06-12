//paste here your theme]
import { createTheme } from "@mui/material/styles";

export const themeOptions = {
    palette: {
        type: 'dark',
        primary: {
            main: '#9e15',
        },
        secondary: {
            main: '#f50057',
        },
        warning: {
            main: '#ff900',
        },
    },
};

const theme=createTheme(themeOptions);
export default theme