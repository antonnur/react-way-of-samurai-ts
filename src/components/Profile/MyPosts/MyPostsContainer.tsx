import React, {ChangeEvent} from 'react';
import {ActionsTypes, PostsType} from "../../../Redax/store";
import {addPostAC, UpdateNewPostTextAC} from "../../../Redax/profile-reducer";
import MyPosts from "./MyPosts";
import {Store} from "redux";
import {AppStateType, AppStoreType} from "../../../Redax/redax-store";

type PropsType = {
  store: AppStoreType
  // store: AppStateType
  posts?: Array<PostsType>
  newPostText?: string
  dispatch?: (action: ActionsTypes) => void
}

const MyPostsContainer = (props: PropsType) => {

  const state = props.store.getState()

  const addPost = () => {
    props.store.dispatch(addPostAC(state.profileReducer.newPostText))
  }

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    props.store.dispatch(UpdateNewPostTextAC(e.currentTarget.value))
  }

  return (<MyPosts updateNewPostText={onPostChange}
                   newPostText={state.profileReducer.newPostText}
                   addPost={addPost}
                   posts={state.profileReducer.posts}/>)
}

export default MyPostsContainer;