import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogType = {
  id: number
  name: string
}

const DialogItem = (props: DialogType) => {
  return <div className={s.dialog + ' ' + s.active}>
    <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
  </div>
}

const Dialogs = (props: DialogType) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>

        <DialogItem name={'Dimych'} id={1}/>

        <div className={s.dialog}>
          <NavLink to={'/dialogs/2'}>Andrey</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/3'}>Sveta</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/4'}>Sasha</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/5'}>Viktor</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/6'}>Valera</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How is your</div>
        <div className={s.message}>Yo</div>
      </div>
    </div>
  )
}

export default Dialogs