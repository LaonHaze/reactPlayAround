import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  number: {
    fontSize: 100,
    marginLeft: "2em",
    marginRight: "2em",
  },
  inlineFlex: {
    display: "inline-flex",
    marginTop: "2em",
    marginBottom: "2em",
  },
  sideButtons: {
    borderRadius: "30%",
  },
  contentBox: {
    marginTop: "2em",
  },
}));

export default useStyles;
