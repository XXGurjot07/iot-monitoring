import Header from './Container/header';
import $ from 'jquery'
import Dashboard from './Container/dashboard';
import { useEffect } from 'react';
import './App.css';

const light = ["#R1", "#Y1", "#G1", "#R2", "#Y2", "#G2", "#R3", "#Y3", "#G3", "#R4", "#Y4", "#G4"];

function App() {

  //UPDATE THIS VARIABLE data TO UPDATE STATUS OF LIGHTS
  //eslint-disable-next-line
  var data = [0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0];
  

  function switchState (id, state) {
    if (state === 1) {
      $(id).addClass("ON");
    }
    else if (state === 0) {
      $(id).removeClass("ON");
    }
  }

  useEffect(() => {
    for (let i = 0; i < data.length; i++){
      switchState(light[i], data[i]);
    }
  }, [data]);

  return (
    <div className="App">
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
