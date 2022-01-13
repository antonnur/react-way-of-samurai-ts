import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes, ProfilePageType} from "../../Redax/store";

type PropsType = {
  state: ProfilePageType
  dispatch: (action: ActionsTypes) => void
}

const Profile = (props: PropsType) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.state.posts}
               newPostText={props.state.newPostText}
               dispatch={props.dispatch}/>
    </div>
  )
}

export default Profile;