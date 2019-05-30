import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <div>
          <Link to="/">
            <h2 id="Logo">{"<CG's Movie DB>"}</h2>
          </Link>
        </div>
      </header>
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={MovieDetail} />
      </Switch>
    </div>
  </Router>
);

export default App;
