import { createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import purple from "@material-ui/core/colors/purple";

export const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: purple[800],
    },
    secondary: {
      main: green[600],
    },
  },
});
