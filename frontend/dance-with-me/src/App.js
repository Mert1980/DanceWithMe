import React from 'react';
//import './App.css';
import Login from './components/Login/Login'
import SignUp from './components/Signup/Signup'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          DANCEWITHME APP
        </p>
      </header>
      <Login/>
      <SignUp/>
    </div>
  );
}

export default App;
