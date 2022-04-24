import React from 'react';
import { Route } from 'react-router-dom';
import Inicio from './components/Inicio.js';
import Home from './components/Home.js'
import NavBar from './components/NavBar.js';
import './App.css';
// import Cards from './components/Cards.js';


function App(){
  return (
    <div className="App">
        <Route exact path="/" component={Inicio} />
        <Route path="/home" component={NavBar} />
        <Route exact path="/home" component={Home} />
    </div>
  );
}

export default App;
