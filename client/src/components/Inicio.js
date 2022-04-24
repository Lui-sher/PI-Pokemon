import React from "react";
import { Link } from 'react-router-dom'
import s from './Inicio.module.css'
import imagen from '../Images/LandingPage.jpg';

export default function Inicio (){
    return (
        <div className={s.contenedor}>
            <img src={imagen} alt="background"/>
            <Link to='/home'>
                <button>Click Here</button>
            </Link>
        </div>
    )
}
