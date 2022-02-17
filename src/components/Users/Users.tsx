import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user-avatar.png";
import {UserType} from "../../Redax/users-reducer";

type PropsUsersType = {
  users: Array<UserType>
  follow: (userId: number) => void
  unFollow: (userId: number) => void
  pageSize: number
  totalUsersCount: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
}

const Users: React.FC<PropsUsersType> =(props)=> {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <div>
        {pages.map(p => {
          return <span className={props.currentPage === p ? s.selectedPage : ''}
                       onClick={(e) => { props.onPageChanged(p) }}>{p}</span>  // && замена ? : ''

        })}
      </div>
      {
        props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
          </div>
          <div>
            {u.followed
              ? <button onClick={() => {props.unFollow(u.id)}}>UnFollow</button>
              : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
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
  )
}

export default Users