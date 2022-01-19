import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {Dispatch} from "redux";
import {FollowAC, SetUsersAC, UnFollowAC, UserType} from "../../Redax/users-reducer";
import {AppStateType} from "../../Redax/redax-store";

type mapStateToProps = {
  users: Array<UserType>
}

type mapDispatchToProps = {
  follow: (userId: number) => void
  unFollow: (userId: number) => void
  setUsers: (users: Array<UserType>) => void
}

const mapStateToProps = (state: AppStateType): mapStateToProps => {
  return {
    users: state.usersReducer.users
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
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer