import { Types } from "./counterActionType";
import { AnyAction } from "redux";
import { createReducer } from "reduxsauce";

//----------------- Configure State -----------------//
export interface CounterState {
  value: number;
}

const INITIAL_STATE: CounterState = {
  value: 0,
};

//----------------- Reducer Functions -----------------//
const increment = (state: CounterState) => {
  const value = state.value + 1;
  return { ...state, value };
};

const decrement = (state: CounterState) => {
  const value = state.value - 1;
  return { ...state, value };
};

const incrementByAmount = (state: CounterState, action: AnyAction) => {
  const value = state.value + action.amount;
  return { ...state, value };
};

const decrementByAmount = (state: CounterState, action: AnyAction) => {
  const value = state.value - action.amount;
  return { ...state, value };
};

//----------------- Create Reducer -----------------//
const reducer = createReducer(INITIAL_STATE, {
  [Types.INCREMENT]: increment,
  [Types.DECREMENT]: decrement,
  [Types.INCREMENT_BY_AMOUNT]: incrementByAmount,
  [Types.DECREMENT_BY_AMOUNT]: decrementByAmount,
});

export default reducer;
