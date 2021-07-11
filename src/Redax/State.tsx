import React from 'react';

type MessageType = {
  id: number
  message: string
}

type DialogType = {
  id: number
  name: string
}

type PostsType = {
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

const store = {
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
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
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
  subscribe(observer: any) {
    this._callSubscriber = observer //pattern - observer (наблюдатель)
  },

  dispatch(action: any) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)
    }
  }
}

export default store
window.store = store
//store - OOP