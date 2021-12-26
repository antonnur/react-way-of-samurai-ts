import React from 'react';
import {rerenderEntireTree} from "../index";

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

export type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
  sidebar: SidebarType
}

const state: RootStateType = {
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
}

export const addPost = (postText: string) => {
  const newPost: PostsType = {
    id: new Date().getTime(),
    message: postText,
    likesCount: 0
  }
  state.profilePage.posts.push(newPost)
}

export const changeNewText = (newText: string) => {
  state.profilePage.newPostText = newText
  rerenderEntireTree(state)
}


export default state

// @ts-ignore
//store - OOP