import {ChangeEvent} from 'react';
import {DialogsPageType} from "../../Redax/store";
import {SendMessageAC, UpdateNewMessageBodyAC} from "../../Redax/dialogs-reducer";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../Redax/redax-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapStateToProps = {
  dialogsPage: DialogsPageType
}

type MapDispatchToProps = {
  sendMessage: () => void
  updateNewMessageBody: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
  return {
    dialogsPage: state.dialogsReducer
  }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
  return {
    sendMessage: () => {
      dispatch(SendMessageAC())
    },
    updateNewMessageBody: (e: ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(UpdateNewMessageBodyAC(e.currentTarget.value))
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer