import React, { useState } from "react";
import { connect, useDispatch } from 'react-redux';
import Card from "./Card";
import s from "./CreatePokemon.module.css";
import { newPokemonCreateApi } from "../Redux/Actions/index.js";
import Estadisticas from "./Estadisticas";
import SliderSelect from "./SliderSelect";
import defaulImage from '../Images/defaultImage.png'
import { Link } from "react-router-dom";



function CreatePokemon ({newPokemonCreateApi}) {

    const imagen = "https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif"
    
    const dispatch = useDispatch()

    const [data, setData] = useState({
        name: '',
        image: '',
        attack: '',
        defense: '',
        hp: '',
        speed: '',
        height: '',
        weight: '',
        pokemonTypes:["normal"],
        hayAlgunoVacio: true,
        pokemonCreado: false,
    });
    const [error, setError] = useState({
        name: '',
        image: '',
        hayErrores: false,
        info: 'los campos no puenden estar vacios ni con errores',
    });

    async function sendNewPokemon(){

        if(!(!!data.name)){
            setData({...data, hayAlgunoVacio: true})

        } else {

            setData({...data, hayAlgunoVacio: false})

            if(!(!error.name)){
                setError({...error, hayErrores: true})
            } else {
                
                const newPokemon = {
                    name: data.name,
                    image: data.image === '' ? imagen:data.image,
                    attack: data.attack,
                    defense: data.defense,
                    hp: data.hp,
                    speed: data.speed,
                    height: data.height,
                    weight: data.weight,
                    pokemonTypes: data.pokemonTypes,
                }

                dispatch(()=>newPokemonCreateApi(newPokemon))

                setData({
                    name: '',
                    image: '',
                    attack: '',
                    defense: '',
                    hp: '',
                    speed: '',
                    height: '',
                    weight: '',
                    pokemonTypes:["normal"],
                    hayAlgunoVacio: true,
                    pokemonCreado: true,
                })
            }
        }

    }

    function validateName(value) {
       
      if(!/^[A-Z]+$/i.test(value)) {
        setError({...error, name:'Solo se permiten letras A-Z'});
      } else {
        setError({...error, name:''});
      }
      setData({...data, name:value});
    }

    function validateImage(value) {

      if(!/http/.test(value)) {
        setError({...error, image:'Debe empezar por http...'});
      } else {
        setError({...error, image:''});
      }
      setData({...data, image:value});
    }

    function handleChange (e) {
        if(e.name === "Puntos de Defensa (PD)"){ 
        setData({...data, defense: e.valor})
        }
        if(e.name === "Puntos de Combate (PC)"){ 
        setData({...data, attack: e.valor})
        }
        if(e.name === "Puntos de Salud (PS)"){ 
        setData({...data, hp: e.valor})
        }
        if(e.name === "Velocidad"){ 
        setData({...data, speed: e.valor})
        }
        if(e.name === "Altura"){ 
        setData({...data, height: e.valor })
        }
        if(e.name === "Peso"){ 
        setData({...data, weight: e.valor})
        }
    }

    return (
        <div className={s.principal}>
            
            <div className={s.titulo}>Crea tu pokémon</div>
            <div className={s.conten}>
                    <div className={s.datos}>
                        <form>
                            <div className={s.input}>
                                <h4>Nombre del Pokémon: </h4>
                                <input value={data.name} 
                                    placeholder="* Pokemon Name..." 
                                    onChange={(e) => validateName(e.target.value)}
                                    />
                                {!error.name ? null : <span>{error.name}</span>}
                            </div>

                            <div className={s.input}>
                                <h4>Direccion URL de la imagen:</h4> 
                                <input value={data.image} 
                                placeholder="https://...." 
                                onChange={(e) => validateImage(e.target.value)}
                                />
                                {!error.image ? null : <span>{error.image}</span>}
                            </div>

                            <SliderSelect valorMax="400" name="Puntos de Defensa (PD)" handleChange={handleChange}/>
                            <SliderSelect valorMax="400" name="Puntos de Combate (PC)" handleChange={handleChange}/>
                            <SliderSelect valorMax="400" name="Puntos de Salud (PS)" handleChange={handleChange}/>
                            <SliderSelect valorMax="200" name="Velocidad" handleChange={handleChange}/>
                            <SliderSelect valorMax="2000" name="Altura" iniciales={"cm"} handleChange={handleChange}/>
                            <SliderSelect valorMax="9000" name="Peso" iniciales={"Kg"} handleChange={handleChange}/>

                            <div className={s.tipo}>
                                <h4>Tipo:</h4>
                                <select 
                                value={data.pokemonTypes[0]} 
                                // onChange={e => setData({...data, pokemonTypes:[e.target.value]})}
                                onChange={e => setData({...data, pokemonTypes: !!data.pokemonTypes[1]?[e.target.value, data.pokemonTypes[1]]:[e.target.value]})}
                                >
                                    <option>normal</option>
                                    <option>fighting</option>
                                    <option>flying</option>
                                    <option>poison</option>
                                    <option>ground</option>
                                    <option>rock</option>
                                    <option>bug</option>
                                    <option>ghost</option>
                                    <option>steel</option>
                                    <option>fire</option>
                                    <option>water</option>
                                    <option>grass</option>
                                    <option>electric</option>
                                    <option>psychic</option>
                                    <option>ice</option>
                                    <option>dragon</option>
                                    <option>dark</option>
                                    <option>fairy</option>
                                </select>
                                {/* <br/> */}
                                <select 
                                value={data.pokemonTypes[1]} 
                                onChange={e => setData({
                                    ...data, 
                                    pokemonTypes: e.target.value==="ninguno"?[data.pokemonTypes[0]]:[data.pokemonTypes[0], e.target.value]})
                                }>
                                    <option>ninguno</option>
                                    <option>normal</option>
                                    <option>fighting</option>
                                    <option>flying</option>
                                    <option>poison</option>
                                    <option>ground</option>
                                    <option>rock</option>
                                    <option>bug</option>
                                    <option>ghost</option>
                                    <option>steel</option>
                                    <option>fire</option>
                                    <option>water</option>
                                    <option>grass</option>
                                    <option>electric</option>
                                    <option>psychic</option>
                                    <option>ice</option>
                                    <option>dragon</option>
                                    <option>dark</option>
                                    <option>fairy</option>
                                </select>
                            </div>

                            <div className={s.boton}>

                                <button 
                                    onClick={e => {
                                    e.preventDefault(); 
                                    sendNewPokemon();}}>
                                    Crear Pokemon
                                </button>
                                
                            </div>
                        </form>

                        <div className={s.errores}>
                            {data.hayAlgunoVacio ? <span>Los Campos marcados con * no pueden estar vacios</span> : null}
                            <br/>
                            {error.hayErrores ? <span>Ningun campo puede tener errores</span> : null }
                        </div>
                        
                    </div>
                    <div className={s.derecha}>
                        <h4>Vista Previa</h4>
                        
                        <br/> 
                        <div className={s.caja}>
                            <div className={s.card}>
                                <Card 
                                    name={!data.name?"pokemon":data.name}
                                    image={data.image === '' ? defaulImage : data.image}
                                    attack={data.attack[0]}
                                    defense={data.defense[0]}
                                    hp={data.hp[0]}
                                    speed={data.speed}
                                    height={data.height}
                                    weight={data.weight}
                                    pokemonTypes={data.pokemonTypes}
                                />
                            </div>
                            <Estadisticas
                                attack={data.attack}
                                defense={data.defense}
                                hp={data.hp}
                                speed={data.speed}
                            />

                        </div>

                        <div className={s.nombres}>
                                <h5 className={s.pd}>PD</h5>
                                <h5 className={s.pc}>PC</h5>
                                <h5 className={s.ps}>PS</h5>
                                <h5 className={s.v}>Velocidad</h5>
                            </div>

                    </div>
            </div>
            {
                data.pokemonCreado ?
                    <div className={s.contenedorMensaje}>
                        <div className={s.mensaje}>
                            <h4>Pokémon creado correctamente</h4>
                                <button onClick={()=>setData({...data, pokemonCreado: false})}>Crear otro Pokémon</button>

                            <Link to={'/home'}>
                                <button>Volver a Home</button>
                            </Link>

                        </div> 
                    </div> :
                null
                }
        </div>
    )
}


function mapStateToProps (state){
    return {
        pokemonTypes: state.pokemonTypes,
        auxiliar: state.auxiliar
    }
};

function mapDispatchToProps (dispatch){
    return{
        newPokemonCreateApi: function(data){
            dispatch(newPokemonCreateApi(data))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePokemon);