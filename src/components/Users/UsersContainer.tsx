import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {Dispatch} from "redux";
import {
  FollowAC, setCurrentPageAC, setTotalUsersCountAC, SetUsersAC, UnFollowAC, UserType
} from "../../Redax/users-reducer";
import {AppStateType} from "../../Redax/redax-store";

type mapStateToProps = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
}

type mapDispatchToProps = {
  follow: (userId: number) => void
  unFollow: (userId: number) => void
  setUsers: (users: Array<UserType>) => void
  setCurrentPage: (pageNumber: number) => void
  setTotalUsersCount: (totalCount: number) => void
}

const mapStateToProps = (state: AppStateType): mapStateToProps => {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUsersCount: state.usersReducer.totalUsersCount,
    currentPage: state.usersReducer.currentPage,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
  return {
    follow: (userId: number) => {
      dispatch(FollowAC(userId))
    },
    unFollow: (userId: number) => {
      dispatch(UnFollowAC(userId))
    },
    setUsers: (users: Array<UserType>) => {
      dispatch(SetUsersAC(users))
    },
    setCurrentPage: (pageNumber: number) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount: number) => {
      dispatch(setTotalUsersCountAC(totalCount))
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer