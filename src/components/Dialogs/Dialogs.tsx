import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type MessageItemProps = {
    message: string;
}

type DialogItemProps = {
    name: string
    id: string
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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>Dialogs
                <DialogItem name={'Dimych'} id={"1"}/>
                <DialogItem name={'Sveta'} id={"2"}/>
                <DialogItem name={'Victor'} id={"3"}/>
                <DialogItem name={'Sasha'} id={"4"}/>
                <DialogItem name={'Valera'} id={"5"}/>
                <DialogItem name={'Andrey'} id={"6"}/>
            </div>
            <div className={s.messages}>Messages
                <Message message={"How is your it-kamasutra"}/>
                <Message message={"Yo"}/>
                <Message message={"Hi"}/>
            </div>
        </div>

    );
};

export default Dialogs;