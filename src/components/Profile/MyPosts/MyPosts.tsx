import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

type MyPostsType = {
  id: number
  message: string
  likesCount: number
}

type MyPostsPropsType = {
  postsData: Array<MyPostsType>
}

let posts = [
  {id: 1, message: 'Hi, how are you?', likesCount: 8},
  {id: 2, message: 'It\'s my first post', likesCount: 15}
];

let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>
)

const MyPosts = (props: MyPostsPropsType) => {
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