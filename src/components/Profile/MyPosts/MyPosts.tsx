import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

type MyPostsType = {
  id: number
  message: string
  likesCount: number
}

export type MyPostsPropsType = {
  postsData: Array<MyPostsType>
}

const MyPosts = (props: any) => {
  let postsElements =
    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

  return (
    <div className={s.postsBlocks}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;