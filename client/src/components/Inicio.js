import React from "react";
import { Link } from 'react-router-dom'
import s from './Inicio.module.css'
import imagen from '../Images/inicio_imagen_Pokemon.png';

export default function Inicio (){
    return (
        <div className={s.contenedor}>
            <img src={imagen} alt="background"/>
            <Link to='/home'>
                <button><h2>PLAY</h2></button>
                
            </Link>
            <div className={s.texto}>
                <h1>Encuentra tus Pokémon favoritos</h1>
            </div>
            
        </div>
    )
}
