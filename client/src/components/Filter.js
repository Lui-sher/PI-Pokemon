import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { filtrar } from '../Redux/Actions/index.js';
import s from './Filter.module.css';

function Filter ({filtrar}){
    const [tipo, setTipo] = useState("Todos");

    return(
        <div className={s.contenedor}>
            <div>
                Filtar por: 
            </div>
            <form onSubmit={(e) => { e.preventDefault(); filtrar(tipo);}}>
                <select value={tipo} onChange={e => setTipo(e.target.value)}>
                    <option>Todos</option>
                    <option>Existentes</option>
                    <option>Creados</option>
                    <option>Tipo Normal</option>
                    <option>Tipo Lucha</option>
                    <option>Tipo Volador</option>
                    <option>Tipo Veneno</option>
                    <option>Tipo Tierra</option>
                    <option>Tipo Roca</option>
                    <option>Tipo Bicho</option>
                    <option>Tipo Fantasma</option>
                    <option>Tipo Acero</option>
                    <option>Tipo Fuego</option>
                    <option>Tipo Agua</option>
                    <option>Tipo Planta</option>
                    <option>Tipo Electrico</option>
                    <option>Tipo Psíquico</option>
                    <option>Tipo Hielo</option>
                    <option>Tipo Dragón</option>
                    <option>Tipo Siniestro</option>
                    <option>Tipo Hada</option>
                </select>
                <button>GO</button>
            </form>
        </div>
    )
}

function mapDispatchToProps (dispatch){
    return{
        filtrar: function(tipo){
            dispatch(filtrar(tipo))
        }
    }
}


export default connect(null, mapDispatchToProps)(Filter);