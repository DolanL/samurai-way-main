import React from 'react';
import {addPostAC, changeNewPostTextAC} from "../../../Redux/Profile-reducer";
import MyPosts from "./MyPosts";
import {store} from "../../../Redux/store";



const MyPostsContainer = () => {

    let state = store.getState()

    const addPost = () => {
        store.dispatch(addPostAC())
    }

    const changeNewPostTextHandler = (text: string) => {
        store.dispatch(changeNewPostTextAC(text))
    }

    return (
        <MyPosts changeNewPostTextHandler={changeNewPostTextHandler} addPost={addPost} posts={state.ProfilePage.Posts} textPost={state.ProfilePage.textPost}/>
    );
};

export default MyPostsContainer;