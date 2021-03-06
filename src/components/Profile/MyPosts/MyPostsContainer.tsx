import React, {ChangeEvent} from 'react';
import {addPostAC, PostsType, ApiProfileType, setUserProfile, UpdateNewPostTextAC} from "../../../Redax/profile-reducer";
import MyPosts from "./MyPosts";
import {AppStateType} from "../../../Redax/redax-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapStateToProps = {
  posts: Array<PostsType>
  newPostText: string
}

type MapDispatchToProps = {
  updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>) => void
  addPost: () => void
  setUserProfile: (profile: null | ApiProfileType) => void
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
  return {
    posts: state.profileReducer.posts,
    newPostText: state.profileReducer.newPostText
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
  return {
    updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(UpdateNewPostTextAC(e.currentTarget.value))
    },
    addPost: () => {
      dispatch(addPostAC())
    },
    setUserProfile: (profile: null | ApiProfileType) => {
      dispatch(setUserProfile(profile))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;