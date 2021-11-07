import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Contacts from './pages/Contacts';

import Navbar from './components/Navbar';

class App extends React.Component {
  state = {
    order: {}
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
  
          <Switch>
            <Route path="/Menu">
              <Menu/>
            </Route>
  
            <Route path="/Contacts">
              <Contacts/>
            </Route>
  
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
