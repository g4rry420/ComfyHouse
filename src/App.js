import React,{ useEffect, useContext, useState } from 'react';
import { Route, Switch } from "react-router-dom";

import './App.css';
import Homepage from './pages/homepage/homepage.component';
import SubDepartment from "./pages/sub-department/sub-department.component";
import Header from './components/Header/header.component'
import CheckoutPage from "./pages/checkout/checkout.component";
import LoginAndSignupPage from './pages/login-and-signup/login-and-signup.component';
import { firestore,convertShopProductsSnapshotToMap } from "./firebase/firebase.utils"
import { updateShopProducts } from "./context/reducers/products-reducer/products-actions"
import WithSpinner from "./components/with-spinner/with-spinner.component"
import { ShopProductsContext } from "./context/shopProducts/shopProductsContext"
import TodoList from "./components/zz/zz.component"

function App() {
  const [loading ,setLoading] = useState(true);
    const { dispatchProducts } = useContext(ShopProductsContext);
    const HomepageSpinner = WithSpinner(Homepage);

    useEffect(() => {
        const  collectionRef = firestore.collection("shopProducts").orderBy("id");
        collectionRef.onSnapshot(async snapshot => {
            const shopProductsMap = await convertShopProductsSnapshotToMap(snapshot);
            updateShopProducts(dispatchProducts, shopProductsMap);
            setLoading(false);
        })
    },[])
 
  return (
    <div className="App mb-5">
      <Header/>
      <Switch>
        <Route exact path="/" render={(props) => <HomepageSpinner isLoading={loading} {...props} /> } />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/loginorsignup" component={LoginAndSignupPage} />
        <Route path={`/:particularDepartment`} component={SubDepartment} />
      </Switch>
      <TodoList/>
    </div>
  );
}

export default App;