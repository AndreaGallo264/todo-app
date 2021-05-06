import { Tooltip, makeStyles } from "@material-ui/core";

const useDarkStyle = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
  },
}));

export const DarkTooltip = (props) => {
  const classes = useDarkStyle();
  return <Tooltip arrow classes={classes} {...props} />;
};
