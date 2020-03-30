import React from 'react';
import GenresPage from './reducers/GenresPage';
import { Link, Route } from 'react-router-dom';
import SignUp from './reducers/SignUp';
import LogIn from './reducers/LogIn';
import Home from './components/Home';

import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (

    <div>
      <Route exact path="/" component={Home} />
      <Route path="/genres" component={GenresPage} />
      <Route path="/signup" render={(props) => <SignUp {...props} />} />
      <Route path="/login" render={(props) => <LogIn {...props} />} />
    </div>

  );
}

export default App;
