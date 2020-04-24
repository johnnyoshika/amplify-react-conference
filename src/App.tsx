import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import List from './List';
import Create from './Create';
import Apollo from './Apollo';

function App() {
  return (
    <Router>
      <header>
        <Link to="/">Home</Link> | <Link to="/create">Create</Link> |{' '}
        <Link to="/apollo">Apollo</Link>
      </header>
      <Route exact path="/" component={List} />
      <Route path="/create" component={Create} />
      <Route path="/apollo" component={Apollo} />
    </Router>
  );
}

export default App;
