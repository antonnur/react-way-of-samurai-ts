import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {
  FollowAC, setCurrentPageAC, setTotalUsersCountAC, SetUsersAC, toggleIsFetchingAC, UnFollowAC, UserType
} from "../../Redax/users-reducer";
import {AppStateType} from "../../Redax/redax-store";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

type mapStateToProps = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
}

type mapDispatchToProps = {
  follow: (userId: number) => void
  unFollow: (userId: number) => void
  setUsers: (users: Array<UserType>) => void
  setCurrentPage: (pageNumber: number) => void
  setTotalUsersCount: (totalCount: number) => void
  toggleIsFetching: (isFetching: boolean) => void
}

type UsersType = {
  users: Array<UserType>
  follow: (userId: number) => void
  unFollow: (userId: number) => void
  setUsers: (users: Array<UserType>) => void
  setCurrentPage:(pageNumber: number) => void
  setTotalUsersCount:(totalCount: number) => void
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  toggleIsFetching: (isFetching: boolean) => void
}

class UsersContainer extends React.Component<UsersType> {

  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
    .then(response => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
    })
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
    axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    .then(response => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(response.data.items)
    })
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged}
             users={this.props.users}
             follow={this.props.follow}
             unFollow={this.props.unFollow}/>
    </>
  }
}

const mapStateToProps = (state: AppStateType): mapStateToProps => {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUsersCount: state.usersReducer.totalUsersCount,
    currentPage: state.usersReducer.currentPage,
    isFetching: state.usersReducer.isFetching
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
    },
    toggleIsFetching: (isFetching: boolean) => {
      dispatch(toggleIsFetchingAC(isFetching))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)