import {ActionsTypes} from "./store";

export type UserType = {
  id: number
  photos: {
    small: string
  }
  followed: boolean
  name: string
  status: string
  location: UsersLocation
}
export type UsersLocation = {
  city: string
  country: string
}

export const FollowAC = (userId: number) => ({type: 'FOLLOW', userId,} as const)
export const UnFollowAC = (userId: number) => ({type: 'UN_FOLLOW', userId,} as const)
export const SetUsersAC = (users: Array<UserType>) => ({type: 'SET_USERS', users,} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage,} as const)

export type InitStateType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
}

const initState: InitStateType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 19,
  currentPage: 1,
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
      return {...state, users: [...state.users, ...action.users]}
    case "SET_CURRENT_PAGE":
      return {...state, currentPage: action.currentPage}
    default:
      return state
  }
}

export default usersReducer