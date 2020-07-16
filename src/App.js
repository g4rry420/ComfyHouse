import React from 'react';
import { Route, Switch } from "react-router-dom";

import './App.css';
import Homepage from './pages/homepage/homepage.component';
import SubDepartment from "./components/sub-department/sub-department.component";
import Header from './components/Header/header.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/:particularDepartment" component={SubDepartment} />
      </Switch>
    </div>
  );
}

export default App;
