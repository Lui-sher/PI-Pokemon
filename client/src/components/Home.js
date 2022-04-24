import React from "react";
//import Card from "./Card";
import Pages from "./Pages";
import image from '../Images/LoadingPokemon.gif';
import s from "./Home.module.css";
import { connect } from 'react-redux';
import { loading, requestBd } from '../Redux/Actions/index.js';

let x = true;

function Home (prop){
    if(x){
        prop.requestBd();
        x = false;
    }

    return(
        <div className={s.contenedor}>
            {/* <div>
                <Card 
                image={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png"}
                name={'PIKACHU'}
                pokedexNumber={25}
                pokemonTypes={["electric", "normal"]}
                />
            </div>
            <br/> */}
            <button onClick={prop.cambiarLoading}>modificar estado loading</button>
            {
                prop.loading ?
                <div>
                    {/* <Cards allPokemon={prop.allPokemon}/> */}
                    <Pages/>
                </div>
                 :
                 <div className={s.loading}>
                     <img src={image} alt='Loading'/>
                     <h1>Loading...</h1>
                 </div>
            }
        </div>
    )
}


function mapStateToProps (state){
    return {
        loading: state.loading,
        allPokemon: state.allPokemon
    }
};


function mapDispatchToProps (dispatch){
    return{
        requestBd: function(){
            dispatch(requestBd())
        },
        cambiarLoading: function(){
            dispatch(loading())
        }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);