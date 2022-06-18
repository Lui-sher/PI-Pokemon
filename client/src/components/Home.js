import React from "react";
import Pages from "./Pages";
import loadingImage from '../Images/LoadingPokemon.gif';
import notFoundImage from '../Images/pikachuTriste.gif';
import s from "./Home.module.css";
import { connect } from 'react-redux';
import { getTypes, requestBd } from '../Redux/Actions/index.js';
// import Card from "./Card";

let x = true;

function Home (prop){
    if(x){
        prop.requestBd();
        prop.getTypes();
        x = false;
    }
    return(
        <div className={s.contenedor}>
            {/* <div className={s.borrador}>
                <Card/>
            </div> */}
            
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
        getTypes: function(){
            dispatch(getTypes())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);