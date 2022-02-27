import React from 'react';
import profileReducer, {addPostAC, setUserProfile, UpdateNewPostTextAC} from "./profile-reducer";
import dialogsReducer, {SendMessageAC, UpdateNewMessageBodyAC} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {
  follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unFollow
} from "./users-reducer";

type MessageType = {
  id: number
  message: string
}

type DialogType = {
  id: number
  name: string
}

export type PostsType = {
  id: number
  message: string
  likesCount: number
}

export type ProfilePageType = {
  posts: Array<PostsType>
  newPostText: string
}

export type DialogsPageType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
  newMessageBody: string
}

type SidebarType = {}

export type StateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
  sidebar: SidebarType
}

export type StoreType = {
  _state: StateType
  _callSubscriber: () => void
  getState: () => StateType
  subscribe: (observer: () => void) => void
  dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
  ReturnType<typeof addPostAC>
  | ReturnType<typeof UpdateNewPostTextAC>
  | ReturnType<typeof UpdateNewMessageBodyAC>
  | ReturnType<typeof SendMessageAC>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof follow>
  | ReturnType<typeof unFollow>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof toggleIsFetching>

/*const store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 8},
        {id: 2, message: 'It\'s my first post', likesCount: 15}
      ],
      newPostText: '',
    },
    dialogsPage: {
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
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('State')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer //pattern - observer (наблюдатель)
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)
    this._callSubscriber()
  }
}

export default store*/

// @ts-ignore
window.store = store
// @ts-ignore
window.state = store._state
//store - OOP