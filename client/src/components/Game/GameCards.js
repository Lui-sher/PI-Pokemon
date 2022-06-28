import React, { useState } from "react";
import { connect } from 'react-redux';
import { getPokemonGame } from '../../Redux/Actions/index.js';
import Card from "../Card";
import s from "./GameCards.module.css"


function GameCards (prop){
console.log(prop)
    const [cambio, setCambio] = useState(true)
    const [guia1, setGuia1] = useState("x")
    const [guia2, setGuia2] = useState("y")
    const [puntos, setPuntos] = useState(0)
    const [intentos, setIntentos] = useState(8)
    const [opendCard, setOpendCard] = useState([])
    const [win, setWin] = useState(false)
    const [lose, setlose] = useState(false)

    function cambiar (posicion){
        if(prop.allPokemonGame[posicion].cardA === "rotar"){
            return
        }
        if(guia1 === "x"){
            prop.allPokemonGame[posicion].cardA = "rotar";
            setGuia1(posicion);
            setTimeout(function(){
                prop.allPokemonGame[posicion].cardB = "normal";
                setCambio(!cambio);
            }, 500);
        } else {
            if(guia2 === "y"){
                prop.allPokemonGame[posicion].cardA = "rotar";
                setGuia2(posicion);
                setTimeout(function(){
                    prop.allPokemonGame[posicion].cardB = "normal";
                    setCambio(!cambio);
                }, 500);
                setGuia2(posicion)
                if(prop.allPokemonGame[guia1].pokedexNumber === prop.allPokemonGame[posicion].pokedexNumber){
                    setOpendCard([...opendCard, ...[guia1], ...[posicion]]);
                    setGuia1("x");
                    setGuia2("y");
                    console.log(prop.allPokemonGame.length)
                    console.log(opendCard.length)
                    if (opendCard.length === prop.allPokemonGame.length-2){
                        setTimeout(function(){
                            setWin(true);
                        }, 500);
                    }
                }
            } else {
                prop.allPokemonGame[guia1].cardB ="rotar";
                prop.allPokemonGame[guia2].cardB ="rotar";
                prop.allPokemonGame[posicion].cardA = "rotar";

                setTimeout(function(){
                    prop.allPokemonGame[guia1].cardA = "normal";
                    prop.allPokemonGame[guia2].cardA = "normal";
                    prop.allPokemonGame[posicion].cardB = "normal";
                    setCambio(!cambio);
                }, 500);
                setGuia1(posicion);
                setGuia2("y")
            }
        }
    }

    let i = 0

    const resultado = prop.allPokemonGame?.map(e => {
        return (
            <div key={i++} onClick={()=> cambiar(e.posicion)}>
                <div className={s[e.cardB]}>
                    <Card
                        name={e.name}
                        pokedexNumber={e.pokedexNumber}
                        image={e.image}
                        pokemonTypes={e.pokemonTypes}
                    />
                </div>
                <div className={s.back}>
                    <div className={s[e.cardA]}>
                        <div className={s.card}></div>
                    </div>
                </div>
                
            </div>
        )
    })

    return (
        <div className={s.general}>
            <div className={s.contenedor}>{resultado}</div>
            <button onClick={() => prop.getPokemonGame(6)}> iniciar juego </button>
            {
                win === true ? 
                <div className={s.ganar}> Ganaste 
                    <button onClick={() => {prop.getPokemonGame(6); setWin(false); setOpendCard([])}}> Volver a jugar </button>
                </div> :
                lose === true ?
                <div className={s.perder}> Perdiste </div> : 
                null
            }
        </div>
    )
}

function mapStateToProps (state){
    return {
        allPokemonGame: state.pokemonGame
    }
};

function mapDispatchToProps (dispatch){
    return{
        getPokemonGame: function(level){
            dispatch(getPokemonGame(level))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameCards);