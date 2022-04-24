import React from 'react';
import Card from './Card';
import s from './Cards.module.css'

export default function Cards({allPokemon}){  //recibe un array

    return(
        <div>
            <div className={s.contenedor}>
                {allPokemon.map(e => {
                    return (
                        <Card 
                            name={e.name} 
                            image={e.image} 
                            pokemonTypes={e.pokemonTypes} 
                            pokedexNumber={e.pokedexNumber} 
                            key={e.pokedexNumber}
                        />
                    )
                })}
            </div>
        </div>
        
    )
}
