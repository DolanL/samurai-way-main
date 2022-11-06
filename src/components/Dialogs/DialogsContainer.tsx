import React from 'react';
import {addMesageTextAC, changeMessageTextAC, DialogsPageType} from "../../Redux/Dialogs-reducer";
import {AppRootState} from "../../Redux/store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    DialogsPage: DialogsPageType
}

type MapDispatchToPropsType = {
    changeTextMessageHandler: (newText: string) => void;
    addMessageTextHandler: () => void;
}

let mapStateToProps = (state: AppRootState): MapStateToPropsType => {
    return {
        DialogsPage: state.DialogsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        changeTextMessageHandler: (newText: string) => {
            dispatch(changeMessageTextAC(newText))
        },
        addMessageTextHandler: () => {
            dispatch(addMesageTextAC())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
