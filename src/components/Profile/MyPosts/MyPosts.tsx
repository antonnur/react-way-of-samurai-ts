import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostsType} from "../../../Redax/State";

type MyPostsPropsType = {
  posts: Array<PostsType>
  message: string
  addPostCallback: (postText: string) => void
  changeNewTextCallback: (newText: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {
  let postsElements =
    props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

  const addPost = () => {
    props.addPostCallback(props.message)
  }

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.changeNewTextCallback(e.currentTarget.value)
  }

  return (
    <div className={s.postsBlocks}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            value={props.message}
          />
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