import React, { Component } from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import routers from './routes';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          {/* menu */}
          {this.showContent(routers)}
        </div>
      </Router>
    );
  }
  showContent = (routers) => {
    var result = null;
    if (routers.length > 0) {
      result = routers.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        )
      })
      return <Switch>{result}</Switch>
    }
  };
}

export default App;
