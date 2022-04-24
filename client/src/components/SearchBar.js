import React, { useState } from "react";
import { connect } from 'react-redux';
import { showCard, onSearch } from '../Redux/Actions/index.js';


function SearchBar({onSearch, auxiliar, showCard}) {
  
  const [pokemonName, setPokemonName] = useState("");

  function searchLocal (value){

    setPokemonName("")
    
    if(isNaN(value)){
      //console.log("soy un string", value)
      const data = value.toLowerCase()
      const pokemon = []
      pokemon.push(auxiliar.find(e => e.name === data))
      //console.log(pokemon)
      if(pokemon[0] === undefined){
        //console.log(`Pokemon ${data} no hallado localmente, busquemos en la API local`)
        return onSearch(data)
      }else {
        //console.log(`Pokemon ${data} hallado localmente`)
        return showCard(pokemon)
      }
    } else {
      //console.log("soy un numero", value)
      const pokemon = []
      pokemon.push(auxiliar.find(e => e.pokedexNumber === (1*value)))
      if(pokemon[0] === undefined){
        //console.log(`Pokemon ${value} no hallado localmente, busquemos en la API local`)
        return onSearch(value)
      }else {
        //console.log(`Pokemon ${value} hallado localmente`)
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
        placeholder="Pokemon Name..."
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