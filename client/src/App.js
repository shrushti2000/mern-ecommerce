import logo from './logo.svg';
import './App.css';
import {Jumbotron} from 'react-bootstrap'
import Layout from './components/Layout';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import PrivateRoute from './components/HOC/PrivateRoute';

function App() {
  return (
    <div className="App">
    
      <Router>
      <Switch>
        <PrivateRoute path="/" exact component={Home}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
      </Switch>
    </Router>
    
    
    </div>
  );
}

export default App;
