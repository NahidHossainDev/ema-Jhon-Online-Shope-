import React, { useContext } from 'react';
import './App.css';
import Header from './componant/Header/Header';
import Shop from './componant/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Review from './componant/Review/Review';
import Manage from './componant/Manage/Manage';
import NotFound from './NotFound/NotFound';
import ProductDetail from './componant/ProductDetail/ProductDetail';
import Shipment from './componant/Shipment/Shipment';
import LogIn from './componant/LogIn/LogIn';
import { useState } from 'react';
import { createContext } from 'react';
import PrivateRoute from './componant/PrivateRoute/PrivateRoute';

export const ContextElement = createContext();
function App() {

const [userLogIn, setUserLogin] = useState({});
  const [search, setSearch] = useState("");
  return (
    <ContextElement.Provider value={[userLogIn, setUserLogin, search, setSearch]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <PrivateRoute path="/manage">
            <Manage></Manage>
          </PrivateRoute>
          <PrivateRoute path="/shipment">
            <Shipment></Shipment>
          </PrivateRoute>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:key">
            <ProductDetail></ProductDetail>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </ContextElement.Provider>
  );
}

export default App;
