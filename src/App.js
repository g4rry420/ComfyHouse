import React from 'react';
import { Route, Switch } from "react-router-dom";

import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopProductsContextProvider from './context/shopProducts/shopProductsContext';

function App() {
  return (
    <div className="App">
      <ShopProductsContextProvider>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </ShopProductsContextProvider>
    </div>
  );
}

export default App;
