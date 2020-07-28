import React from 'react';
import { Route, Switch } from "react-router-dom";

import './App.css';
import Homepage from './pages/homepage/homepage.component';
import SubDepartment from "./pages/sub-department/sub-department.component";
import Header from './components/Header/header.component'
import CheckoutPage from "./pages/checkout/checkout.component";

function App() {
 
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route path={`/:particularDepartment`} component={SubDepartment} />
      </Switch>
    </div>
  );
}

export default App;
