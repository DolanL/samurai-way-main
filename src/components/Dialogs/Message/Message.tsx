import React from 'react';
import s from "../Dialogs.module.css";
import {MessageItemProps} from "../../../index";

const Message = (props: MessageItemProps) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export default Message;