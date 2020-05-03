import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import Header from './components/Header/Header.jsx';
import { Route, } from 'react-router-dom';
import ContentContainer from './components/Content/ContentContainer.js';
import DialogsContainer from './components/Dialogs/DialogsContainer.js';
import SideBarContainer from './components/SideBar/SideBarContainer.js';
import UsersContainer from './components/Users/Users.Container.js';
library.add(fab, faCheckSquare, faCoffee)


function App(props) {




  return (

    <div className="App">

      <div className="appHeader"><Header /></div>

      <div className="appSideBar">  <SideBarContainer
      /></div>
      <div className="appContent">
        <Route path='/profile/:userId?/' render={() => <ContentContainer

        />} />
        <Route path="/messages/" render={() => <DialogsContainer

        />} />
        <Route path="/news" />
        <Route path="/music" />
        <Route path="/FindUser" render={() => <UsersContainer />

        } />
        <Route path="/setting" />

      </div>
    </div>

  );
}

export default App;
