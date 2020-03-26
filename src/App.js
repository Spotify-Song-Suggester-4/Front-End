import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/profile">
          <h1>Profile</h1>
        </Route>
        <Route path="/profile">
          <h1>Profile</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
