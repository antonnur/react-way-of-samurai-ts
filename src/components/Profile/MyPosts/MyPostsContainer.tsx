import React, {ChangeEvent} from 'react';
import {ActionsTypes, PostsType} from "../../../Redax/store";
import {addPostAC, UpdateNewPostTextAC} from "../../../Redax/profile-reducer";
import MyPosts from "./MyPosts";
import {AppStoreType} from "../../../Redax/redax-store";
import {connect} from "react-redux";

type PropsType = {
  store: AppStoreType
  posts?: Array<PostsType>
  newPostText?: string
  dispatch?: (action: ActionsTypes) => void
}

// const MyPostsContainer = (props: PropsType) => {
//
//   return (
//     <StoreContext.Consumer>
//       {
//         (store) => {
//           const state = store.getState()
//
//           const addPost = () => {
//             store.dispatch(addPostAC(state.profileReducer.newPostText))
//           }
//
//           const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
//             store.dispatch(UpdateNewPostTextAC(e.currentTarget.value))
//           }
//
//           return <MyPosts updateNewPostText={onPostChange}
//                           newPostText={state.profileReducer.newPostText}
//                           addPost={addPost}
//                           posts={state.profileReducer.posts}/>
//         }
//       }
//     </StoreContext.Consumer>
//   )
// }

const mapStateToProps = (store: AppStoreType) => {
  return {
    posts: store.getState().profileReducer.posts,
    newPostText: store.getState().profileReducer.newPostText
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(UpdateNewPostTextAC(e.currentTarget.value))
    },
    addPost: () => {
      dispatch(addPostAC(store.getState().profileReducer.newPostText))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;