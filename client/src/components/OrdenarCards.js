import React from "react";
import { useState } from "react";
import { connect } from 'react-redux';
import s from "./OrdenarCards.module.css";
import { ordenar } from '../Redux/Actions/index.js';

function OrdenarCards ({ordenar}){

    const [tipo, setTipo] = useState("Pokedex ↑");

    return (
        <div className={s.contenedor}>
            <h4>
                Ordenar por:
            </h4>
            <form onSubmit={(e) => { e.preventDefault(); ordenar(tipo);}}>
                <select value={tipo} onChange={e => setTipo(e.target.value)}>
                    <option>Pokedex ↑</option>
                    <option>Pokedex ↓</option>
                    <option>Fuerza ↑</option>
                    <option>Fuerza ↓</option>
                    <option>Nombre A → Z</option>
                    <option>Nombre Z → A</option>
                </select>
                
                    <button>GO</button>
                
            </form>
        </div>
    );
}


function mapDispatchToProps (dispatch){
    return{
        ordenar: function(tipo){
            dispatch(ordenar(tipo))
        }
    }
}


export default connect(null, mapDispatchToProps)(OrdenarCards);