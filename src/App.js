import React from 'react';
import Router from './Router/Router';
import Nav from './Nav/Nav';
import Canvas from './Canvas/Canvas';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Nav /> */}
        <Canvas>
          <Router />
        </Canvas>
      </div>
    </BrowserRouter>

  )
}

export default App;
