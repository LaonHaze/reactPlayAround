import React, { useState } from "react";
import { CounterState } from "../../Redux/Counter/counterReducer";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Container,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import useStyles from "./Counter.style";

type Props = CounterState & {
  incrementCount: () => void;
  decrementCount: () => void;
  incrementCountBy: (amount: number) => void;
  decrementCountBy: (amount: number) => void;
};

const Counter = (props: Props) => {
  const styles = useStyles();
  const [incVal, setIncVal] = useState(0);

  const incrementNum = () => {
    props.incrementCount();
  };

  const decrementNum = () => {
    props.decrementCount();
  };

  const incrementBy = () => {
    props.incrementCountBy(incVal);
  };

  const decrementBy = () => {
    props.decrementCountBy(incVal);
  };

  const updateVal = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIncVal(+e.target.value);
  };

  return (
    <Container>
      <div className={styles.contentBox}>
        <Typography variant="h3" className={styles.number}>
          {props.value}
        </Typography>
      </div>
      <Grid className={styles.contentBox}>
        <Button
          className={styles.sideButtons}
          variant="outlined"
          size="large"
          onClick={decrementNum}
        >
          <RemoveIcon />
        </Button>
        <Button
          className={styles.sideButtons}
          variant="outlined"
          size="large"
          onClick={incrementNum}
        >
          <AddIcon />
        </Button>
      </Grid>
      <Grid
        className={styles.contentBox}
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h6">Custom Amount</Typography>
        <TextField
          type="number"
          label="Enter amount"
          onChange={updateVal}
          InputLabelProps={{}}
        />
        <Grid>
          <Button variant="outlined" onClick={decrementBy}>
            Subtract Amount
          </Button>
          <Button variant="outlined" onClick={incrementBy}>
            Add Amount
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Counter;
