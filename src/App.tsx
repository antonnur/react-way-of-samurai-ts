import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {StateType} from "./components/Redax/State";

type PropsType = {
  state: StateType
}

const App = (props: PropsType) => {
  return (
    <BrowserRouter>
      <div className={'app-wrapper'}>
        <Header/>
        <NavBar/>
        <div className={'app-wrapper__content'}>
          <Route path={'/profile'}
                 render={() => <Profile state={props.state.profilePage}/>}/>
          <Route path={'/dialogs'}
                 render={() => <Dialogs state={props.state.dialogsPage}/>}/>
          <Route path={'/news'} render={() => <News/>}/>
          <Route path={'/music'} render={() => <Music/>}/>
          <Route path={'/settings'} render={() => <Settings/>}/>
        </div>
      </div>
    </BrowserRouter>);
}

export default App;
