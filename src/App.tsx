import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import List from './List';
import Create from './Create';

function App() {
  return (
    <Router>
      <header>
        <Link to="/">Home</Link> | <Link to="/create">Create</Link>
      </header>
      <Route exact path="/" component={List} />
      <Route path="/create" component={Create} />
    </Router>
  );
}

export default App;
