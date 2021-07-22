import { IMessage } from "../../Redux/Message/messageReducer";
import { Card, Typography, CardContent, Paper } from "@material-ui/core";
import useStyles from "./Message.style";

type Props = IMessage;

const Message = (props: Props) => {
  const styles = useStyles();

  return (
    <>
      <Paper className={styles.card} variant="outlined" elevation={1}>
        <Card className={styles.cardContent}>
          <CardContent>
            <Typography variant="h5">{props.title}</Typography>
            <Typography variant="body2">{props.message}</Typography>
          </CardContent>
        </Card>
      </Paper>
    </>
  );
};

export default Message;
