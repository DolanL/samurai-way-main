import React from 'react';
import {addPostAC, changeNewPostTextAC, PostType} from "../../../Redux/Profile-reducer";
import MyPosts from "./MyPosts";
import {AppRootState} from "../../../Redux/store";
import {Dispatch} from "redux";
import {connect} from "react-redux";


type mapStateToPropsType = {
    posts: Array<PostType>,
    textPost: string
}


type mapDispatchToPropsType = {
    addPost: () => void
    changeNewPostTextHandler: (text: string) => void
}

const mapStateToProps = (state: AppRootState): mapStateToPropsType => {
    return {
        posts: state.ProfilePage.Posts,
        textPost: state.ProfilePage.textPost
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        changeNewPostTextHandler: (text: string) => {
            dispatch(changeNewPostTextAC(text))
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
