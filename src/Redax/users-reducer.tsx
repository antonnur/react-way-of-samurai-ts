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
export const setTotalUsersCountAC = (totalUsersCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalUsersCount,} as const)
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching,} as const)

export type InitStateType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
}

const initState: InitStateType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
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
      return {...state, users: action.users}
    case "SET_CURRENT_PAGE":
      return {...state, currentPage: action.currentPage}
    case "SET_TOTAL_USERS_COUNT":
      return {...state, totalUsersCount: action.totalUsersCount}
    case "TOGGLE_IS_FETCHING":
      return {...state, isFetching: action.isFetching}
    default:
      return state
  }
}

export default usersReducer