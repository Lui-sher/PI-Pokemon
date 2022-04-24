import React from "react";
import { Link } from "react-router-dom";
import s from "./Detalles.module.css";

export default function Detalles ({pokemon}){

    return(
        <div className={s.contenedor}>
            <Link to={`/home`}>
                <button>x</button>
            </Link>
            
            <img src={pokemon.image} alt='pokemon'/>
            <h1>{pokemon.name.toUpperCase()}</h1>
            <div>
                <h3>Tipos</h3>
                <h4>{pokemon.pokemonTypes[0].toUpperCase()}</h4>
                {pokemon.pokemonTypes[1]?
                <h4>{pokemon.pokemonTypes[1].toUpperCase()}</h4> : null}
                
            </div>
            <div>
                <h3>Pokedex No.: {pokemon.pokedexNumber}</h3>
            </div>
            <div>
                <h3>ESTADISTICAS</h3>
                <div>
                    <h2>Fuerza: {pokemon.attack}</h2>
                    <h2>Defensa: {pokemon.defense}</h2>
                    <h2>Vida: {pokemon.hp}</h2>
                    <h2>Velocidad: {pokemon.speed}</h2>
                    <h2>Altura: {pokemon.height}</h2>
                    <h2>Peso: {pokemon.weight}</h2>
                </div>
            </div>
        </div>
    )
}