import React from 'react';
import s from './Users.module.css'
import {UserType} from "../../Redax/users-reducer";

type PropsType = {
  users: Array<UserType>
  follow: (userId: number) => void
  unFollow: (userId: number) => void
  setUsers: (users: Array<UserType>) => void
}

const Users = (props: PropsType) => {

  if (props.users.length === 0) {
    props.setUsers([
      {id: 1, photoUrl: 'https://clck.ru/amRZr', followed: true, fullName: 'Ivan', status: 'I am a Boss', location: {city: 'Moscow', country: 'Russia'}},
      {id: 2, photoUrl: 'https://clck.ru/amRZr', followed: true, fullName: 'Dmitri', status: 'I am a programmer', location: {city: 'Minsk', country: 'Belarus'}},
      {id: 3, photoUrl: 'https://clck.ru/amRZr', followed: false, fullName: 'Sasha', status: 'I am a Boss', location: {city: 'Kiev', country: 'Ukraine'}},
      {id: 4, photoUrl: 'https://clck.ru/amRZr', followed: false, fullName: 'Dasha', status: 'I am a storekeeper', location: {city: 'Texas', country: 'USA'}}
    ])
  }

  return <div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img src={u.photoUrl} className={s.userPhoto}/>
          </div>
          <div>
            {u.followed
              ? <button onClick={() => {props.unFollow(u.id)}}>UnFollow</button>
              : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </span>
      </div>)
    }
  </div>
}

export default Users