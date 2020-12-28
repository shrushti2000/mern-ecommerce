import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Jumbotron} from 'react-bootstrap'
import Layout from './components/Layout';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';

import {Route,Switch} from 'react-router-dom';
import PrivateRoute from './components/HOC/PrivateRoute';
import authReducer from './reducer/auth.reducer';
import { isUserLoggedIn } from './actions';
import {useDispatch,useSelector} from 'react-redux'
import Products from './containers/Products';
import Orders from './containers/Orders';

function App() {

  const dispatch=useDispatch();
  const auth=useSelector(state => state.auth);
  useEffect(()=>{
    if(!authReducer.authenticate){
      dispatch(isUserLoggedIn());
    }
  },[])

  return (
    <div className="App">
    
      
      <Switch>
        <PrivateRoute path="/" exact component={Home}/>
        <PrivateRoute path="/products" exact component={Products}/>
        <PrivateRoute path="/orders" exact component={Orders}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
      </Switch>
    
    
    
    </div>
  );
}

export default App;
