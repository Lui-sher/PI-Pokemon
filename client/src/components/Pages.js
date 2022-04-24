import React from "react";
import { useState } from "react";
import { connect } from 'react-redux';
import Cards from "./Cards";
import s from './Pages.module.css';

function Pages (prop){

    const [paginado, SetPaginado] = useState({
        contador: 0,
        pagina: 0
    })

    const pagesNumber = Math.ceil(prop.allPokemon.length/12)
    const pagina = prop.allPokemon.slice(paginado.contador, paginado.contador+12)

    return(
        <div className={s.contenedor}>
            <button onClick ={() => 
                paginado.pagina > 0 ? 
                SetPaginado({...paginado, contador: paginado.contador-12, pagina:paginado.pagina-1}):
                null}>
                ←
            </button>

            <button onClick={() => 
                paginado.pagina+1 <  pagesNumber?
                SetPaginado({...paginado, contador: paginado.contador+12, pagina: paginado.pagina+1}):
                null}>
                →
            </button>

            <Cards allPokemon={pagina}/>

            <button onClick ={() => 
                paginado.pagina > 0 ? 
                SetPaginado({...paginado, contador: paginado.contador-12, pagina:paginado.pagina-1}):
                null}>
                ←
            </button>

            <button onClick={() => 
                paginado.pagina+1 <  pagesNumber?
                SetPaginado({...paginado, contador: paginado.contador+12, pagina: paginado.pagina+1}):
                null}>
                →
            </button>
        </div>
    )
}

function mapStateToProps (state){
    return {
        allPokemon: state.allPokemon
    }
};


export default connect(mapStateToProps, null)(Pages);