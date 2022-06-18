import React, { useState } from "react";
import { connect } from 'react-redux';
import { showCard, onSearch } from '../Redux/Actions/index.js';


function SearchBar({onSearch, auxiliar, showCard}) {
  
  const [pokemonName, setPokemonName] = useState("");

  function searchLocal (value){

    setPokemonName("")
    
    if(isNaN(value)){
  
      const data = value.toLowerCase()
      const pokemon = []
      pokemon.push(auxiliar.find(e => e.name === data))

      if(pokemon[0] === undefined){
        
        return onSearch(data)
      }else {
        return showCard(pokemon)
      }
    } else {

      const pokemon = []
      pokemon.push(auxiliar.find(e => e.pokedexNumber === (1*value)))
      if(pokemon[0] === undefined){
        
        return onSearch(1*value)
      }else {
        return showCard(pokemon)
      }
    }
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      searchLocal(pokemonName);
    }}>
      <input
        type="text"
        placeholder="Name or Pokedex..."
        value={pokemonName}
        onChange={e => setPokemonName(e.target.value)}
      />
      
        <input type="submit" value="Search" />
     

    </form>
  );
}

function mapStateToProps (state){
  return {
      auxiliar: state.auxiliar,
  }
};

function mapDispatchToProps (dispatch){
  return{
      onSearch: function(value){
          dispatch(onSearch(value))
      },
      showCard: function(value){
        dispatch(showCard(value))
      },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);