import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogItemProps, MessageItemProps} from "../../index";


type DialogsTypeProps = {
    dialogsData: Array<DialogItemProps>
    messageData: Array<MessageItemProps>
}

const Dialogs = (props: DialogsTypeProps) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>Dialogs
                {props.dialogsData.map(dialogItem => {
                    return <DialogItem key={dialogItem.id} name={dialogItem.name} id={dialogItem.id}/>
                })}
            </div>
            <div className={s.messages}>Messages
                {props.messageData.map(messageItem => {
                    return <Message key={messageItem.id} message={messageItem.message}/>
                })}
            </div>
        </div>

    );
};

export default Dialogs;