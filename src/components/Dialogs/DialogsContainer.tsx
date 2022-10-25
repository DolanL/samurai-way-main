import React from 'react';
import {addMesageTextAC, changeMessageTextAC} from "../../Redux/Dialogs-reducer";
import {store} from "../../Redux/store";
import Dialogs from "./Dialogs";

export const DialogsContainer = () => {

    const state = store.getState().DialogsPage


    const changeTextMessageHandler = (newText: string) => {
        store.dispatch(changeMessageTextAC(newText))
    }

    const addMessageTextHandler = () => {
        store.dispatch(addMesageTextAC())
    }


    return <Dialogs dialogsPage={state}
                    addMessageTextHandler={addMessageTextHandler}
                    changeTextMessageHandler={changeTextMessageHandler}
    />
}