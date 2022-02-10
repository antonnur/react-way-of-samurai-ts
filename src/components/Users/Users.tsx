import React from 'react';
import s from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/user-avatar.png'
import {UserType} from "../../Redax/users-reducer";

type UsersType = {
  users: Array<UserType>
  follow: (userId: number) => void
  unFollow: (userId: number) => void
  setUsers: (users: Array<UserType>) => void
  setCurrentPage:(pageNumber: number) => void
  pageSize: number
  totalUsersCount: number
  currentPage: number
}

class Users extends React.Component<UsersType> {

  componentDidMount() {

    axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {

    const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return <div>
      <div>
        {pages.map(p => {
          return <span className={this.props.currentPage === p ? s.selectedPage : ''}
                       onClick={() => { this.props.setCurrentPage(p)}}>{p}</span>  // && замена ? : ''

        })}
      </div>
      {
        this.props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
          </div>
          <div>
            {u.followed
              ? <button onClick={() => {this.props.unFollow(u.id)}}>UnFollow</button>
              : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>}
          </div>
        </span>
          <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            {/*<div>{"u.location.country"}</div>*/}
            {/*<div>{"u.location.city"}</div>*/}
          </span>
        </span>
        </div>)
      }
    </div>
  }
}

export default Users