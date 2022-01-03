import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ActionsTypes, PostsType} from "../../../Redax/State";
import {addPostAC, UpdateNewPostTextAC} from "../../../Redax/profile-reducer";

type PropsType = {
  posts: Array<PostsType>
  newPostText: string
  dispatch:(action: ActionsTypes) => void
}

const MyPosts = (props: PropsType) => {
  let postsElements =
    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

  const addPost = () => {
    props.dispatch(addPostAC(props.newPostText))
  }

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(UpdateNewPostTextAC(e.currentTarget.value))
  }

  return (
    <div className={s.postsBlocks}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            value={props.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;