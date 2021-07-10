import React from 'react';
import store, {StateType} from "./Redax/State";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state}
           addPost={store.addPost.bind(store)}
           updateNewPostText={store.updateNewPostText.bind(store)}/>
    </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)