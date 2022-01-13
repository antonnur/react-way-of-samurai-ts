import React from 'react';
import store from "./Redax/redax-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {StoreType} from "./Redax/store";

const rerenderEntireTree = (store: StoreType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App store={store}
           dispatch={store.dispatch.bind(store)}
      />
    </BrowserRouter>, document.getElementById('root'));
}
rerenderEntireTree(store.getState())
// rerenderEntireTree()

store.subscribe(() => {
  const state = store.getState()
  rerenderEntireTree(state)
})