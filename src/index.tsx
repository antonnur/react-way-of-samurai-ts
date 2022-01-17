import React from 'react';
import store, {AppStateType} from "./Redax/redax-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const rerenderEntireTree = (state: AppStateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state}
           store={store}
      />
    </BrowserRouter>, document.getElementById('root'));
}
rerenderEntireTree(store.getState())

store.subscribe(() => {
  const state = store.getState()
  rerenderEntireTree(state)
})