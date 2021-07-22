import { createTheme, responsiveFontSizes } from "@material-ui/core";

const LightTheme = createTheme({
  overrides: {
    MuiButton: {
      root: {
        marginTop: "0.2em",
        marginLeft: "0.2em",
        marginRight: "0.2em",
        marginBottom: "0.2em",
      },
    },
    MuiInput: {
      root: {
        marginTop: "0.5em",
        marginLeft: "0.5em",
        marginRight: "0.5em",
        marginBottom: "0.5em",
      },
    },
  },
});

export default LightTheme;
