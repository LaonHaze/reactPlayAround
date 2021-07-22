import { createActions } from "reduxsauce";

export const { Types, Creators } = createActions({
  postMessage: ["message"],
});
