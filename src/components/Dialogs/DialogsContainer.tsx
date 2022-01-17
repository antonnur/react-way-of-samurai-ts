import React, {ChangeEvent} from 'react';
import {ActionsTypes, DialogsPageType} from "../../Redax/store";
import {SendMessageAC, UpdateNewMessageBodyAC} from "../../Redax/dialogs-reducer";
import Dialogs from "./Dialogs";
import {AppStoreType} from "../../Redax/redax-store";

type PropsType = {
  state?: DialogsPageType
  dispatch?: (action: ActionsTypes) => void
  store: AppStoreType
}

const DialogsContainer = (props: PropsType) => {

  const state: DialogsPageType = props.store.getState().dialogsReducer

  const onSendMessageClick = () => {
    props.store.dispatch(SendMessageAC())
  }
  const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    props.store.dispatch(UpdateNewMessageBodyAC(e.currentTarget.value))
  }

  return (<Dialogs updateNewMessageBody={onNewMessageChange}
                   sendMessage={onSendMessageClick}
                   dialogsPage={state}/>)
}

export default DialogsContainer