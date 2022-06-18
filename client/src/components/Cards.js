import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import s from './Cards.module.css'

export default function Cards({allPokemon}){  //recibe un array

    return(
        <div>
            <div className={s.contenedor}>
                {allPokemon.map(e => {
                    return (
                        <Link to={`/home/pokemon/${e.pokedexNumber}`} key={e.pokedexNumber}>
                            <div className={s.agrandar}>
                                <Card 
                                    name={e.name} 
                                    image={e.image} 
                                    pokemonTypes={e.pokemonTypes} 
                                    pokedexNumber={e.pokedexNumber} 
                                />
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
        
    )
}
