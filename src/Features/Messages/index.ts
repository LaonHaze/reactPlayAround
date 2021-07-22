import Messages from "./Messages";
import { connect } from "react-redux";
import { RootState, AppDispatch } from "../../Redux/store";
import { Creators } from "../../Redux/Message/messageActionType";
import { IMessage } from "../../Redux/Message/messageReducer";

const mapStateToProps = (state: RootState) => {
  return {
    messages: state.message.messages,
    messageCount: state.message.messageCount,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    uploadMessage: (message: IMessage) =>
      dispatch(Creators.postMessage(message)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
