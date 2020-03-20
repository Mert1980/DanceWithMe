import React from 'react';
//import './App.css';
import Login from './Components/Login/Login'
import SignUp from './Components/Sing-Up/SignUp'

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
