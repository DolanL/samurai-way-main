import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {DialogItemProps, MessageItemProps, PostPropsType} from "./index";


export type AppTypeProps = {
    postData: Array<PostPropsType>
    dialogsData: Array<DialogItemProps>
    messageData: Array<MessageItemProps>
}


function App(props: AppTypeProps) {

    return (
        <BrowserRouter>
            <div className="app__wrapper">
                <Header/>
                <Navbar/>
                <div className="app__content__wrapper">
                    <Route path={"/profile"} render={() => <Profile postData={props.postData}/>}/>
                    <Route path={"/dialogs"} render={() => <Dialogs dialogsData={props.dialogsData} messageData={props.messageData}/>}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
