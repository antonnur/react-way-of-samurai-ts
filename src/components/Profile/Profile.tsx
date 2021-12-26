import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {addPost, changeNewText, ProfilePageType} from "../../Redax/State";

type PropsType = {
  profilePage: ProfilePageType
}

const Profile = (props: any) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.profilePage.posts}
               message={props.profilePage.newPostText}
               addPostCallback={addPost}
               changeNewTextCallback={changeNewText}
      />
    </div>
  )
}

export default Profile;