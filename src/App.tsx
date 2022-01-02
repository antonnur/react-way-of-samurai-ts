import React, {useEffect} from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import {ActionsTypes, StoreType} from "./Redax/State";

type PropsType = {
  store: StoreType
  dispatch: (action: ActionsTypes) => void
}

const App: React.FC<PropsType> = (props) => {
  const state = props.store.getState() // - получаем state
  return (
    <div className={'app-wrapper'}>
      <Header/>
      <NavBar/>
      <div className={'app-wrapper__content'}>
        <Route path='/dialogs'
               render={() =>
                 <Dialogs
                   state={state.dialogsPage}
                   dispatch={props.store.dispatch.bind(props.store)}
                 />}/>
        <Route path='/profile'
               render={() =>
                 <Profile
                   state={state.profilePage}
                   dispatch={props.store.dispatch.bind(props.store)}
                 />}/>
        <Route path={'/news'} render={() => <News/>}/>
        <Route path={'/music'} render={() => <Music/>}/>
        <Route path={'/settings'} render={() => <Settings/>}/>
        <Route path={'/friends'} render={() => <Friends/>}/>
      </div>
    </div>
  )
}

export default App;
