import { Types } from "./messageActionType";
import { AnyAction } from "redux";
import { createReducer } from "reduxsauce";

//----------------- Configure State -----------------//
export interface IMessage {
  id: number;
  title: string;
  message: string;
}

export interface IMessages {
  messageCount: number;
  messages: IMessage[];
}

const INITIAL_STATE: IMessages = {
  messageCount: 0,
  messages: [{ id: 0, title: "Hi", message: "This is a first message" }],
};

//----------------- Reducer Functions -----------------//
const postMessage = (state: IMessages, action: AnyAction) => {
  return {
    ...state,
    messageCount: state.messageCount + 1,
    messages: [...state.messages, action.message],
  };
};

//----------------- Create Reducer -----------------//
const reducer = createReducer(INITIAL_STATE, {
  [Types.POST_MESSAGE]: postMessage,
});

export default reducer;
