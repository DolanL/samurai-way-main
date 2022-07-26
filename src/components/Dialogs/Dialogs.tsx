import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    addMesageTextAC,
    DialogsPageType,
} from "../../Redux/Dialogs-reducer";
import {store} from "../../Redux/store";


type DialogsPropsType = {
    DialogsPage: DialogsPageType
    changeTextMessageHandler: (newText: string) => void
    addMessageTextHandler: () => void
}

const Dialogs = (props: DialogsPropsType) => {

    const changeTextMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.changeTextMessageHandler(newText)
    }

    const addMessageTextHandler = () => {
        store.dispatch(addMesageTextAC())
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>Dialogs
                {props.DialogsPage.Dialogs.map(dialogItem => {
                    return <DialogItem key={dialogItem.id} name={dialogItem.name} id={dialogItem.id}/>
                })}
            </div>
            <div>
                <div className={s.messages}>Messages
                    {props.DialogsPage.Messages.map(messageItem => {
                        return <Message key={messageItem.id} message={messageItem.message}/>
                    })}
                </div>
                <div className={s.sender}>
                    <textarea value={props.DialogsPage.messageText}
                              onChange={changeTextMessageHandler}></textarea>
                    <button onClick={addMessageTextHandler}>send the message</button>
                </div>
            </div>
        </div>

    );
};

export default Dialogs;