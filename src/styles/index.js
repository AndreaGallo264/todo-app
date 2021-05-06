import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import purple from "@material-ui/core/colors/purple";

export const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: purple[800],
    },
    secondary: {
      main: red[800],
    },
  },
});
