import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {AppStoreType} from "../../Redax/redax-store";

type PropsType = {
  store: AppStoreType
}

const Profile = (props: PropsType) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;