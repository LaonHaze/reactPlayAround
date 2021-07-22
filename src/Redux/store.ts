import { combineReducers, createStore, AnyAction } from "redux";
import counterReducer from "./Counter/counterReducer";
import messageReducer from "./Message/messageReducer";

const reducers = combineReducers({
  counter: counterReducer,
  message: messageReducer,
});

const rootReducer = (state: RootState, action: AnyAction) => {
  return reducers(state, action);
};

const store = createStore(reducers);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
