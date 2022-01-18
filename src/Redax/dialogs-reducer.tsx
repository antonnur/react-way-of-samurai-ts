import {ActionsTypes} from "./store";

export const UpdateNewMessageBodyAC = (body: string) => {
  return {
    type: 'UPDATE-NEW-MESSAGE-BODY',
    body: body
  } as const
}

export const SendMessageAC = () => {
  return {
    type: 'SEND-MESSAGE',
  } as const
}

type MessageType = {
  id: number
  message: string
}

type DialogType = {
  id: number
  name: string
}

export type DialogsPageType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
  newMessageBody: string
}

const initState:DialogsPageType =  {
  dialogs: [
    {id: 1, name: 'Nadiya'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sonya'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Valera'}
  ],
  messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Are you all right'},
    {id: 5, message: 'What where'}
  ],
  newMessageBody: ''
}

const dialogsReducer = (state:DialogsPageType = initState, action: ActionsTypes):DialogsPageType => {
  switch (action.type) {
    case "UPDATE-NEW-MESSAGE-BODY":
      return {
        ...state,
        newMessageBody: action.body
      }
    case "SEND-MESSAGE":
      let stateCopy = {...state};
      const body = stateCopy.newMessageBody
      stateCopy.newMessageBody = ''
      stateCopy.messages.push({id: 6, message: body})
      return stateCopy
    default:
      return state
  }
}

export default dialogsReducer