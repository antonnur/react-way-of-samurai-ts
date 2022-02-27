import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ApiProfileType} from "../../Redax/profile-reducer";

type PropsProfileType = {
  profile: null | ApiProfileType
}

const Profile: React.FC<PropsProfileType> = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;