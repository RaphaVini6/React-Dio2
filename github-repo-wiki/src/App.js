import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import RepoPage from './pages/RepoPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/repo/:owner/:repo" component={RepoPage} />
      </Switch>
    </Router>
  );
};

export default App;
