import React from 'react';

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

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof UpdateNewPostTextAC>

export const  addPostAC = (newPostText: string) => {
  return {
    type: 'ADD-POST',
    newPostText: newPostText
  } as const
}
export const UpdateNewPostTextAC = (newText: string) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: newText
  } as const
}


const store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 8},
        {id: 2, message: 'It\'s my first post', likesCount: 15}
      ],
      newPostText: ''
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
      ]
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
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: new Date().getTime(),
        message: action.newPostText,
        likesCount: 0
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber()
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber()
    }
  }
}

export default store

// @ts-ignore
window.store = store
//store - OOP