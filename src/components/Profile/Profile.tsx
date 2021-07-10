import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { ProfilePageType} from "../../Redax/State";

type PropsType = {
  profilePage: ProfilePageType
  addPost: any
  updateNewPostText:any
}

const Profile = (props: any) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.profilePage.posts}
               newPostText={props.profilePage.newPostText}
               updateNewPostText={props.updateNewPostText}
               addPost={props.addPost}/>
    </div>
  )
}

export default Profile;