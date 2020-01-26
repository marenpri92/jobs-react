import { createMuiTheme } from "@material-ui/core/styles";

const customTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#1848BF",
            dark: "#061233"
        },
        secondary: {
            main: "#EFEFEF",
        }
    },
    typography: {
        h3: {
            color: "white"
        }
    }
})

export default customTheme;