import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ActionsTypes, addPostAC, PostsType} from "../../../Redax/State";

type MyPostsPropsType = {
  posts: Array<PostsType>
  newPostText: string
  dispatch:(action: ActionsTypes) => void
}

const MyPosts = (props: MyPostsPropsType) => {
  let postsElements =
    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

  const newPostElement: any = React.createRef()

  const addPost = () => {
    props.dispatch(addPostAC(props.newPostText))
  }

  const onPostChange = () => {
    let text = newPostElement.current.values
    props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
  }

  return (
    <div className={s.postsBlocks}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
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