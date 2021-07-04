import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props: any) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.posts}/>
      {/*<MyPosts postsData={[]}/>*/}
    </div>
  )
}

export default Profile;