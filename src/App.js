import React from 'react';
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

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/manage">
            <Manage></Manage>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path ='/product/:key'>
            <ProductDetail></ProductDetail>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
