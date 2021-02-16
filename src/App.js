import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './header/Header.js';
import SearchPage from './searchpage/SearchPage.js';
import HomePage from './homepage/HomePage.js';

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route 
          path="/"
          exact
          render={(routerProps) => <HomePage {...routerProps} />}
          />
          <Route path="/search" 
          exact render={(routerProps) => <SearchPage {...routerProps} />}
          />
        </Switch>
      </div>
    </Router>
  );
}
