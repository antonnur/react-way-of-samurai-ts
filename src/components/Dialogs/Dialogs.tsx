import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
  id: number
  name: string
}

type MessageType = {
  message: string
}

const DialogItem = (props: DialogItemType) => {
  return <div className={`${s.dialog} ${s.active}`}>
    <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
  </div>
}

const Message = (props: MessageType) => {
  return <div className={s.message}>{props.message}</div>
}

let dialogs = [
  {id: 1, name: 'Dimych'},
  {id: 2, name: 'Andrey'},
  {id: 3, name: 'Sveta'},
  {id: 4, name: 'Sasha'},
  {id: 5, name: 'Viktor'},
  {id: 6, name: 'Valera'}
]

let messages = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How is your'},
  {id: 3, message: 'Yo'},
  {id: 4, message: 'Are you all right'},
  {id: 5, message: 'What where'}
]

let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

let messagesElements = messages.map(m => <Message message={m.message}/>)

type DialogsPropsType = {
  messages: Array<MessageType>
  dialogs: Array<DialogItemType>
}

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs