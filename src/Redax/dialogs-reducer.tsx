import {ActionsTypes} from "./State";

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

const initState =  {
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

const dialogsReducer = (state = initState, action: ActionsTypes) => {
  switch (action.type) {
    case "UPDATE-NEW-MESSAGE-BODY":
      state.newMessageBody = action.body
      return state
    case "SEND-MESSAGE":
      const body = state.newMessageBody
      state.newMessageBody = ''
      state.messages.push({id: 6, message: body})
      return state
    default:
      return state
  }
}

export default dialogsReducer