import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea name="" id=""></textarea>
                <button>add post</button>
            </div>
            <div>
                <Post message={'My first post'}/>
                <Post message={'My second post'}/>
                <Post message={'My third post'}/>
            </div>
        </div>
    );
};

export default MyPosts;