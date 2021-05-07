import { createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import purple from "@material-ui/core/colors/purple";

export const outerTheme = createMuiTheme({
  palette: {
    secondary: {
      main: purple[800],
    },
    primary: {
      main: green[800],
    },
  },
});
