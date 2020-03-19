import React from 'react';
//import './App.css';
import Login from './Components/Login/Login'
import SingUp from './Components/Sing-Up/SignUp'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          DANCEWITHME APP
        </p>
      </header>
      <Login/>
      <SingUp/>
    </div>
  );
}

export default App;
