import React from "react";
import OrdenarCards from "./OrdenarCards";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import s from "./NavBar.module.css";
import { Link } from "react-router-dom";

export default function NavBar (){

    return (
        <div className={s.contenedor}>
            <SearchBar/>
            <OrdenarCards/>
            <Filter/>
            
            <Link to={'/home'}>
                <h4>HOME</h4>
            </Link>

            <Link to={'/home/createPokemon'}>
                <h4>CREAR POKEMON</h4>
            </Link>

            <Link to={'/home/game'}>
                <h4>GAME</h4>
            </Link>
        </div>
    );
}