import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ProfilePageType} from "../../../Redax/State";

const MyPosts = (props: ProfilePageType) => {
  let postsElements =
    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

  const newPostElement: any = React.createRef()

  const addPost = (props: any) => {
    props.dispatch({type: 'ADD-POST'})
  }

  const onPostChange = (props: any) => {
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