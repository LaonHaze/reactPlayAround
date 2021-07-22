import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  msgBox: {
    paddingLeft: "35%",
    paddingRight: "35%",
  },
}));

export default useStyles;
