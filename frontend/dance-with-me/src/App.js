import React from 'react';
//import './App.css';
import Login from './components/Login/Login'
import SignUp from './components/Signup/Signup'
import { Router, Redirect } from 'react-router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          DANCE WITH ME
        </p>
      </header>

      <Login/>
      <SignUp/>
    </div>
  );
}

export default App;
