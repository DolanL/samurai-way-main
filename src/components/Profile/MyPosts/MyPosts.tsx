import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'My first post', likesCount: 123},
        {id: 2, message: 'My second post', likesCount: 15},
        {id: 3, message: 'My third post', likesCount: 12},
    ]
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="" id=""></textarea>
                </div>
                <div>
                    <button>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postData.map(postItem => {
                    return <Post key={postItem.id} message={postItem.message} likesCount={postItem.likesCount}/>
                })}
            </div>
        </div>
    );
};

export default MyPosts;