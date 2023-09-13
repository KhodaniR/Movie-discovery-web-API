import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import MovieDetails from './components/MovieDetails';
import MovieSearch from './components/MovieSearch';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/search" component={MovieSearch} />
      </Switch>
    </Router>
  );
}

export default App;
