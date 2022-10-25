import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {store} from "./Redux/store";
import {Provider} from "react-redux";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store}><App/></Provider>,
        document.getElementById('root')
    );
}
rerenderEntireTree()

store.subscribe(rerenderEntireTree)
