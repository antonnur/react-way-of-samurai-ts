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

export const follow = (userId: number) => ({type: 'FOLLOW', userId,} as const)
export const unFollow = (userId: number) => ({type: 'UN-FOLLOW', userId,} as const)
export const setUsers = (users: Array<UserType>) => ({type: 'SET-USERS', users,} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage,} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({type: 'SET-TOTAL-USERS-COUNT', totalUsersCount,} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching,} as const)

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
    case 'UN-FOLLOW':
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u
        })
      }
    case 'SET-USERS':
      return {...state, users: action.users}
    case "SET-CURRENT-PAGE":
      return {...state, currentPage: action.currentPage}
    case "SET-TOTAL-USERS-COUNT":
      return {...state, totalUsersCount: action.totalUsersCount}
    case "TOGGLE-IS-FETCHING":
      return {...state, isFetching: action.isFetching}
    default:
      return state
  }
}

export default usersReducer