import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import Header from './components/Header/Header.jsx';
import SideBar from './components/SideBar/SideBar.jsx';
import Content from './components/Content/Content.jsx';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
library.add(fab, faCheckSquare, faCoffee)


function App(props) {




  return (
    <BrowserRouter>
      <div className="App">

        <div className="appHeader"><Header /></div>

        <div className="appSideBar">  <SideBar state={props.state} /></div>
        <div className="appContent">
          <Route path="/profile" render={() => <Content
            state={props.state}
            dispatch={props.dispatch}

          />} />
          <Route path="/messages" render={() => <Dialogs
            state={props.state}
            dispatch={props.dispatch}
          />} />
          <Route path="/news" />
          <Route path="/music" />
          <Route path="/setting" />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
