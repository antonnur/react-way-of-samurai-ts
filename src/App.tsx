import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import {AppStateType,} from "./Redax/redax-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type PropsType = {
  // state: AppStateType
}

const App: React.FC<PropsType> = (props) => {
  // const state = props.state
  return (
    <div className={'app-wrapper'}>
      <Header/>
      <NavBar/>
      <div className={'app-wrapper__content'}>
        <Route path='/dialogs'
               render={() =>
                 <DialogsContainer/>}/>
        <Route path='/profile'
               render={() =>
                 <Profile/>}/>
        <Route path={'/news'} render={() => <News/>}/>
        <Route path={'/music'} render={() => <Music/>}/>
        <Route path={'/settings'} render={() => <Settings/>}/>
        <Route path={'/friends'} render={() => <Friends/>}/>
      </div>
    </div>
  )
}

export default App;
