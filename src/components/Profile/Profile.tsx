import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from "../Redax/State";

type PropsType = {
  state: ProfilePageType
}

const Profile = (props: PropsType) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.state.posts}/>
    </div>
  )
}

export default Profile;