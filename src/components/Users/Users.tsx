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
}

class Users extends React.Component<UsersType> {

  componentDidMount() {

    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        // debugger
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return <div>
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
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
          </span>
        </span>
        </div>)
      }
    </div>
  }
}

export default Users