import React from 'react';
import s from './Post.module.css';

type PostType = {
  message: string
  likesCount: number
}

const Post = (props: PostType) => {

  return (
    <div className={s.item}>
      <img src='https://clck.ru/Vi8Td'/>
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  )
}

export default Post;