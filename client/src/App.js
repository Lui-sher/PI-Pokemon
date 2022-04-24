import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Inicio from './components/Inicio.js';
import Home from './components/Home.js'
import NavBar from './components/NavBar.js';
import Detalles from './components/Detalles.js';
import './App.css';


function App({auxiliar}){

  function onFilter(id){
    return auxiliar.find(e => e.pokedexNumber === (1*id))
  }

  return (
    <div className="App">
        <Route exact path="/" component={Inicio} />
        <Route path="/home" component={NavBar} />
        <Route exact path="/home" component={Home} />
        <Route exact path='/home/:pokemonId' render={({match}) => <Detalles pokemon={onFilter(match.params.pokemonId)}/>} />
    </div>
  );
}


function mapStateToProps (state){
  return {
      auxiliar: state.auxiliar,
  }
};

export default connect(mapStateToProps, null)(App);