import {ActionsTypes} from "./store";

type ContactsType = {
  facebook: string
  website: string
  vk: string
  twitter: string
  instagram: string
  youtube: string
  github: string
  mainLink: string
}
type PhotosType = {
  small: string
  large: string
}
export type ApiProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  aboutMe: string
  contacts: ContactsType
  photos: PhotosType
}

export type PostsType = {
  id: number
  message: string
  likesCount: number
}

export type ProfilePageType = {
  posts: Array<PostsType>
  newPostText: string
  profile: null | ApiProfileType
}

const initState: ProfilePageType = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 8},
    {id: 2, message: 'It\'s my first post', likesCount: 15}
  ],
  newPostText: '',
  profile: null,
}

export const addPostAC = () => ({type: 'ADD-POST',} as const)
export const setUserProfile = (profile: null | ApiProfileType) => ({type: 'SET-USER-PROFILE', profile,} as const)
export const UpdateNewPostTextAC = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: newText,} as const)

const profileReducer = (state: ProfilePageType = initState, action: ActionsTypes): ProfilePageType => {
  switch (action.type) {

    case 'ADD-POST':
      let newPost = {
        id: new Date().getTime(),
        message: state.newPostText,
        likesCount: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }

    case 'UPDATE-NEW-POST-TEXT': {
      return {
        ...state,
        newPostText: action.newText
      }
    }
    case "SET-USER-PROFILE": {
      return {...state, profile: action.profile}
    }
    default:
      return state
  }
}

export default profileReducer