import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  card: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: "21%",
    maxWidth: "23%",
    minHeight: "15em",
    maxHeight: "15em",
  },
  cardContent: {
    height: "100%",
    overflow: "auto",
    overflowWrap: "break-word",
  },
}));

export default useStyles;
