import React from 'react';
import './assets/App.css';
import Setter from './features/setter/Setter';
import Display from './features/display/Display'
import { incrementBreak, incrementSession, decrementBreak, decrementSession} from './features/display/displaySlice'

function App() {
  return (
    <div className="App">
      <h1>25 + 5 Clock</h1>
      <div className="Setters">
        <Setter name="break" increment={incrementBreak} decrement={decrementBreak}/>
        <Setter name="session" increment={incrementSession} decrement={decrementSession}/>
      </div>
      <Display/>
    </div>
  );
}

export default App;
