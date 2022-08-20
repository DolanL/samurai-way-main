import React from 'react';
import s from './Post.module.css'
import {PostPropsType} from "../../../../index";

const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img
                src="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
                alt=""/>
            {props.message}
            <div>{props.likesCount}</div>
        </div>

    );
};

export default Post;