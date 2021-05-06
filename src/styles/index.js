import { createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import brown from "@material-ui/core/colors/brown";

export const outerTheme = createMuiTheme({
  palette: {
    secondary: {
      main: brown[300],
    },
    primary: {
      main: green[800],
    },
  },
});
