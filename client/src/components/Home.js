import React from "react";
import Pages from "./Pages";
import loadingImage from '../Images/LoadingPokemon.gif';
import notFoundImage from '../Images/pikachuTriste.gif';
import s from "./Home.module.css";
import { connect } from 'react-redux';
import { requestBd } from '../Redux/Actions/index.js';

let x = true;

function Home (prop){
    if(x){
        prop.requestBd();
        x = false;
    }
    return(
        <div className={s.contenedor}>
            {
            prop.loading 
            ?
            <div className={s.loading}>
                <img src={loadingImage} alt='Loading'/>
                <h1>Loading...</h1>
            </div>
            :
            prop.notFound
            ?
            <div className={s.notFound}>
                <img src={notFoundImage} alt='Error 404'/>
                <h1>404 No se hallaron resultados :(</h1>
            </div>
            :
            <div>
                <Pages/>
            </div>
            }
        </div>
    )
}


function mapStateToProps (state){
    return {
        loading: state.loading,
        notFound: state.notFound
    }
};


function mapDispatchToProps (dispatch){
    return{
        requestBd: function(){
            dispatch(requestBd())
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);