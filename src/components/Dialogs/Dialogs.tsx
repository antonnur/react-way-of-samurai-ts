import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../Redax/store";

type PropsType = {
  updateNewMessageBody: (e: ChangeEvent<HTMLTextAreaElement>) => void
  sendMessage: () => void
  dialogsPage: DialogsPageType
}

const Dialogs = (props: PropsType) => {

  const state = props.dialogsPage

  const dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
  const messagesElements = state.messages.map(m => <Message message={m.message}/>)
  const newMessageBody = state.newMessageBody

  const onSendMessageClick = () => {
    props.sendMessage()
  }
  const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewMessageBody(e)
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