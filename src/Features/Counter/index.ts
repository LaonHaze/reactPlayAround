import Counter from "./Counter";
import { connect } from "react-redux";
import { RootState, AppDispatch } from "../../Redux/store";
import { Creators } from "../../Redux/Counter/counterActionType";

const mapStateToProps = (state: RootState) => {
  return {
    value: state.counter.value,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    incrementCount: () => dispatch(Creators.increment()),
    decrementCount: () => dispatch(Creators.decrement()),
    incrementCountBy: (amount: number) =>
      dispatch(Creators.incrementByAmount(amount)),
    decrementCountBy: (amount: number) =>
      dispatch(Creators.decrementByAmount(amount)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
