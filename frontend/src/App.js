import React, { useState } from 'react';
import Header from './Header';
import Logon from './pages/Logon';
import './global.css';
import Routes from './routes';

function App() {
  const [counter, setCounter] = useState(0);

  function increment(){
    setCounter(counter + 1);
  }

  return (
    /*
    <div>
      <Header title="Semana Omnistack"></Header>
      <h1>Contador:{counter}</h1>
      <button onClick={increment}>Incrementar</button>
      <Logon/>
    </div>
    */
   <div>
    <Routes/>
 </div>

  );
}

export default App;