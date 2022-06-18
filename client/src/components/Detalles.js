import React from "react";
import { Link } from "react-router-dom";
import s from "./Detalles.module.css";

export default function Detalles ({pokemon}){


    return(
        <div className={s.contenedor}>
            
            <div className={s.titulo}>Detalles del pokémon</div>

            <div className={s.card}>

                <div className={s.multiButton}>
                    <Link to={`/home`}>
                        <button>x</button>
                    </Link>
                </div>

                <div>
                    <br/>
                    <div><h1>{pokemon.name.toUpperCase()}</h1></div>
                    <div className={s.description}>
                        <div className={s.imagen}>
                            <img src={pokemon.image} alt='pokemon'/>
                        </div>
                        <div className={s.datos}>
                            <div className={s.tipo}>
                                <h2>TIPO</h2>
                                <h3>{pokemon.pokemonTypes[0]?.toUpperCase()}</h3>
                                {pokemon.pokemonTypes[1]?
                                <h3>{pokemon.pokemonTypes[1]?.toUpperCase()}</h3> : null}
                            </div>
                            {/* <div>
                                <h3>Pokedex No.: {pokemon.pokedexNumber}</h3>
                            </div> */}
                            <div>
                                <br/>
                                <h2>ESTADISTICAS</h2>
                                <div className={s.estadisticas}>
                                    <h3>Fuerza: {pokemon.attack}</h3>
                                    <h3>Defensa: {pokemon.defense}</h3>
                                    <h3>Vida: {pokemon.hp}</h3>
                                    <h3>Velocidad: {pokemon.speed}</h3>
                                    <h3>Altura: {pokemon.height}</h3>
                                    <h3>Peso: {pokemon.weight}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}