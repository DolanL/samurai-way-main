import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostPropsType} from "../../../index";

type MyPostsPropsType = {
    postData: Array<PostPropsType>
}

const MyPosts = (props: MyPostsPropsType) => {

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
                {props.postData.map(postItem => {
                    return <Post key={postItem.id} message={postItem.message} likesCount={postItem.likesCount}/>
                })}
            </div>
        </div>
    );
};

export default MyPosts;