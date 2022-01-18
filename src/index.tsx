import React from 'react';
import store, {AppStateType} from "./Redax/redax-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";

const rerenderEntireTree = (state: AppStateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>, document.getElementById('root'));
}
rerenderEntireTree(store.getState())

store.subscribe(() => {
  const state = store.getState()
  rerenderEntireTree(state)
})