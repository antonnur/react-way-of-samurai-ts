import {ChangeEvent} from 'react';
import {addPostAC, PostsType, ProfilePageType, UpdateNewPostTextAC} from "../../../Redax/profile-reducer";
import MyPosts from "./MyPosts";
import {AppStateType} from "../../../Redax/redax-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

// type PropsType = {
//   store: AppStoreType
//   posts?: Array<PostsType>
//   newPostText?: string
//   dispatch?: (action: ActionsTypes) => void
// }

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

type MapStateToProps = {
  posts: Array<PostsType>
  newPostText: string
}

type MapDispatchToProps = {
  updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>) => void
  addPost: () => void
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
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;