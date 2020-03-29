import React from 'react';
import GenresPage from './reducers/GenresPage';
import { Link, Route } from 'react-router-dom';
import SignUp from './reducers/SignUp';
import LogIn from './reducers/LogIn';

function App() {
  return (
    <div>
      <h1>Spotify Song Suggester</h1>
      <Route path="/genres" component={GenresPage} />
      <Route path="/signup" render={(props) => <SignUp {...props} />} />
      <Route path="/login" render={(props) => <LogIn {...props} />} />
    </div>
  );
}

export default App;
