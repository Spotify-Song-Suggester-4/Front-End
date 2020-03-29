import React from 'react';

import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute';
import Home from './components/Home';

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <ProtectedRoute
        exact
        path="/profile"
        render={(props) => <h1>Profile</h1>}
      />
    </>
  );
}

export default App;
