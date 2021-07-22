import React, { useState } from "react";
import { IMessage, IMessages } from "../../Redux/Message/messageReducer";
import Message from "../../Components/Message";
import { Container, Button, TextField, Grid } from "@material-ui/core";
import useStyles from "./Messages.style";

type Props = IMessages & {
  uploadMessage: (message: IMessage) => void;
};

const Messages = (props: Props) => {
  const styles = useStyles();

  const [title, setTitle] = useState("");
  const [message, setMsg] = useState("");

  const submitMessage = () => {
    const msg: IMessage = {
      id: props.messageCount + 1,
      title: title,
      message: message,
    };
    props.uploadMessage(msg);
  };

  const updateTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const updateMsg = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMsg(e.target.value);
  };

  return (
    <Container>
      <h1>Messages</h1>
      <Grid className={styles.msgBox} container direction="column">
        <TextField
          type="text"
          label="Enter Title"
          variant="outlined"
          onChange={updateTitle}
        />
        <TextField
          type="text"
          multiline
          rows={4}
          label="Enter Message"
          variant="outlined"
          onChange={updateMsg}
        />
        <Button variant="contained" onClick={submitMessage}>
          Add Message!
        </Button>
      </Grid>
      <div className={styles.root}>
        {props.messages.map((msg) => (
          <Message title={msg.title} message={msg.message} id={msg.id} />
        ))}
      </div>
    </Container>
  );
};

export default Messages;
