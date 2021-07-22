import { createActions } from "reduxsauce";

export const { Types, Creators } = createActions({
  increment: [],
  decrement: [],
  incrementByAmount: ["amount"],
  decrementByAmount: ["amount"],
});
