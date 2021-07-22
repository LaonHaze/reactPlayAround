import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 0.1,
    textAlign: "left",
  },
  navFirstButton: {
    "&.active": {
      background: "blue",
    },
  },
  navSecondButton: {
    "&.active": {
      background: "yellow",
    },
  },
  navButton: {
    borderRadius: 50,
    color: "black",
  },
  navWrapper: {
    background: "white",
    borderRadius: 50,
    width: "fit-content",
  },
  leftSide: {
    flexGrow: 1,
    alignContent: "left",
  },
  rightButton: {
    width: "2em",
  },
}));

export default useStyles;
