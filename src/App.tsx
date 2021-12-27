import React from 'react';
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
import {StoreType} from "./Redax/State";

type PropsType = {
  store: StoreType
}

const App: React.FC<PropsType> = (props: any) => {
  return (
    <div className={'app-wrapper'}>
      <Header/>
      <NavBar/>
      <div className={'app-wrapper__content'}>
        <Route path={'/profile'}
               render={() => <Profile
                 profilePage={props.store.profilePage}
                 dispatch={props.dispatch}
               />}/>
        <Route path={'/dialogs'}
               render={() => <Dialogs
                 state={props.store.dialogsPage}
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
