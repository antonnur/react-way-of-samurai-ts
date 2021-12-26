import React from 'react';
import state, {addPost, RootStateType} from "./Redax/State";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export const rerenderEntireTree = (state: RootStateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
      />
    </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(state)