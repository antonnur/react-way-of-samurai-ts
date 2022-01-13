import {ActionsTypes} from "./store";

export const addPostAC = (newPostText: string) => {
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

const initState =  {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 8},
    {id: 2, message: 'It\'s my first post', likesCount: 15}
  ],
    newPostText: ''
}

const profileReducer = (state = initState, action: ActionsTypes) => {
  switch (action.type) {
    case 'ADD-POST':
      let newPost = {
        id: new Date().getTime(),
        message: action.newPostText,
        likesCount: 0
      }
      state.posts.push(newPost)
      state.newPostText = ''
      return state
    case "UPDATE-NEW-POST-TEXT":
      state.newPostText = action.newText
      return state
    default:
      return state
  }
}

export default profileReducer