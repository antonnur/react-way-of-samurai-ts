import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsTypes, DialogsPageType} from "../../Redax/store";
import {SendMessageAC, UpdateNewMessageBodyAC} from "../../Redax/dialogs-reducer";

type PropsType = {
  state: DialogsPageType
  dispatch:(action: ActionsTypes) => void
}

const Dialogs = (props: PropsType) => {
  const dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
  const messagesElements = props.state.messages.map(m => <Message message={m.message}/>)
  const newMessageBody = props.state.newMessageBody

  const onSendMessageClick = () => {
  props.dispatch(SendMessageAC())
  }
  const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(UpdateNewMessageBodyAC(e.currentTarget.value))
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea value={newMessageBody}
                      placeholder={'Enter your message'}
                      onChange={onNewMessageChange}>
            </textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send text</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs