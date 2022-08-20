import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


//Данные для Постов
export type PostPropsType = {
    id?: number;
    message: string;
    likesCount: number
}

let postData: Array<PostPropsType> = [
    {id: 1, message: 'My first post', likesCount: 123},
    {id: 2, message: 'My second post', likesCount: 15},
    {id: 3, message: 'My third post', likesCount: 12},
]

// Данные для Диалогов

export type DialogItemProps = {
    id: number
    name: string
}

let dialogsData: Array<DialogItemProps> = [
    {id: 1, name: 'Dymych'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Victor'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Valera'},
    {id: 6, name: 'Andrey'},
]

//Данные сообщений

export type MessageItemProps = {
    id?: number;
    message: string;
}

let messageData: Array<MessageItemProps> = [
    {id: 1, message: 'How is your it-kamasutra'},
    {id: 2, message: 'Yo'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'Hi Andrey!'},
]


ReactDOM.render(
    <App postData={postData} dialogsData={dialogsData} messageData={messageData}/>,
  document.getElementById('root')
);