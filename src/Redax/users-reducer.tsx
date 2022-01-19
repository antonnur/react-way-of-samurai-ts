import {ActionsTypes} from "./store";

export type UserType = {
  id: number
  photoUrl: string
  followed: boolean
  fullName: string
  status: string
  location: UsersLocation
}
export type UsersLocation = {
  city: string
  country: string
}

export const FollowAC = (userId: number) => {
  return {
    type: 'FOLLOW',
    userId
  } as const
}
export const UnFollowAC = (userId: number) => {
  return {
    type: 'UN_FOLLOW',
    userId
  } as const
}
export const SetUsersAC = (users: Array<UserType>) => {
  return {
    type: 'SET_USERS',
    users
  } as const
}

export type InitStateType = {
  users: Array<UserType>
}

const initState: InitStateType = {
  users: []
}

const usersReducer = (state: InitStateType = initState, action: ActionsTypes): InitStateType => {
  switch (action.type) {

    case 'FOLLOW':
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u
        })
      }

    case 'UN_FOLLOW':
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u
        })
      }

    case 'SET_USERS':
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
    default:
      return state
  }
}

export default usersReducer