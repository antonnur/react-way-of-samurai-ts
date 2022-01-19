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
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App: React.FC = () => {
  return (
    <div className={'app-wrapper'}>
      <Header/>
      <NavBar/>
      <div className={'app-wrapper__content'}>
        <Route path='/dialogs'
               render={() => <DialogsContainer/>}/>
        <Route path='/profile'
               render={() => <Profile/>}/>
        <Route path='/users'
               render={() => <UsersContainer/>}/>
        <Route path={'/news'} render={() => <News/>}/>
        <Route path={'/music'} render={() => <Music/>}/>
        <Route path={'/settings'} render={() => <Settings/>}/>
        <Route path={'/friends'} render={() => <Friends/>}/>
      </div>
    </div>
  )
}

export default App;
