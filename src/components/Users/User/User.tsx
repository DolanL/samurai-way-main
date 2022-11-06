import React from 'react';
import s from "./User.module.css"
import userImage from "../../../imgs/62681-flat-icons-face-computer-design-avatar-icon.png"


type UserPropsType = {
    user: any
    followUserHandler: (id: number) => void
    unFollowUserHandler: (id: number) => void
}


const User = (props: UserPropsType) => {

    const followUserHandler = () => {
        props.followUserHandler(props.user.id)
    }

    const unFollowUserHandler = () => {
        props.unFollowUserHandler(props.user.id)
    }

    return (
        <div className={s.user}>
            <div>
                <img className={s.img} src={props.user.photos.small === null ? userImage : props.user.photos.small} alt="foto"/>
                {props.user.followed ? <button onClick={unFollowUserHandler}>unfollow</button> : <button onClick={followUserHandler}>follow</button>}
            </div>
            <div>
                <div className={s.user_content}>
                    <div className={s.user_left_content}>
                        <div>{props.user.name}</div>
                        <div>{props.user.status}</div>
                    </div>
                    <div className={s.user_right_content}>
                        {/*<div>{props.user.location},</div>*/}
                        {/*<div>{props.user.location}</div>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;