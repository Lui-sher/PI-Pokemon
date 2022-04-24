import React from "react";
import OrdenarCards from "./OrdenarCards";
import SearchBar from "./SearchBar";
import s from "./NavBar.module.css";

export default function NavBar (){

    return (
        <div className={s.contenedor}>
            <SearchBar/>
            <OrdenarCards/>
        </div>
    );
}