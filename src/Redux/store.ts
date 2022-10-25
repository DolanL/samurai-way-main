import {DialogsReducer} from "./Dialogs-reducer";
import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./Profile-reducer";


const rootReducer = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer
})

export const store = createStore(rootReducer)

export type AppRootState = ReturnType<typeof rootReducer>