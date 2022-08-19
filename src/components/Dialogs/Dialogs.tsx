import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type MessageItemProps = {
    message: string;
}

type DialogItemProps = {
    name: string
    id: number
}

const DialogItem = (props: DialogItemProps) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessageItemProps) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Dymych'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Victor'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Andrey'},
    ]

    let messageData = [
        {id: 1, message: 'How is your it-kamasutra'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Hi Andrey!'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>Dialogs
                {dialogsData.map(dialogItem => {
                    return <DialogItem key={dialogItem.id} name={dialogItem.name} id={dialogItem.id}/>
                })}
            </div>
            <div className={s.messages}>Messages
                {messageData.map(messageItem => {
                    return <Message key={messageItem.id} message={messageItem.message}/>
                })}
            </div>
        </div>

    );
};

export default Dialogs;