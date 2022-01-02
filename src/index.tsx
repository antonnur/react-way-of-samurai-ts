import React from 'react';
import store, {StateType} from "./Redax/State";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App store={store}
           dispatch={store.dispatch.bind(store)}
      />
    </BrowserRouter>, document.getElementById('root'));
}

// rerenderEntireTree(store.getState())
rerenderEntireTree()

store.subscribe(rerenderEntireTree)