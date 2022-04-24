import { Link } from 'react-router-dom';
import s from "./Card.module.css"


export default function Card(obj){ //recibe un objeto

    return(
        <div className={s.contenedor}>

            <Link to={`/home/${obj.pokedexNumber}`}>
                
                <div className={s.card}>
                    <div className={s.lienzo}>
                        <img src={obj.image} alt='Pokémon'/>
                        <div className={s.info}>
                            <div className={s.name}>
                                <h3>{obj.name}</h3>
                            </div>
                            <div className={s.data}>
                                <div className={s.pokedex}>
                                    POKEDEX: No. {obj.pokedexNumber}
                                </div>
                                <div className={s.type}>
                                    {
                                        obj.pokemonTypes.map(e =>   (e === "normal") ? 
                                                                    <div className={s.normal} key={1}>{"NORMAL"}</div> : 
                                                                    (e === "fighting") ?
                                                                    <div className={s.fighting} key={2}>{"LUCHA"}</div> :
                                                                    (e === "flying") ?
                                                                    <div className={s.flying} key={3}>{"VOLADOR"}</div> :
                                                                    (e === "poison") ?
                                                                    <div className={s.poison} key={4}>{"VENENO"}</div> :
                                                                    (e === "ground") ?
                                                                    <div className={s.ground} key={5}>{"TIERRA"}</div> :
                                                                    (e === "rock") ?
                                                                    <div className={s.rock} key={6}>{"ROCA"}</div> :
                                                                    (e === "bug") ?
                                                                    <div className={s.bug} key={7}>{"BICHO"}</div> :
                                                                    (e === "ghost") ?
                                                                    <div className={s.ghost} key={8}>{"FANTASMA"}</div> :
                                                                    (e === "steel") ?
                                                                    <div className={s.steel} key={9}>{"ACERO"}</div> :
                                                                    (e === "fire") ?
                                                                    <div className={s.fire} key={10}>{"FUEGO"}</div> :
                                                                    (e === "water") ?
                                                                    <div className={s.water} key={11}>{"AGUA"}</div> :
                                                                    (e === "grass") ?
                                                                    <div className={s.grass} key={12}>{"PLANTA"}</div> :
                                                                    (e === "electric") ?
                                                                    <div className={s.electric} key={13}>{"ELECTRICO"}</div> :
                                                                    (e === "psychic") ?
                                                                    <div className={s.psychic} key={14}>{"PSÍQUICO"}</div> :
                                                                    (e === "ice") ?
                                                                    <div className={s.ice} key={15}>{"HIELO"}</div> :
                                                                    (e === "dragon") ?
                                                                    <div className={s.dragon} key={16}>{"DRAGÓN"}</div> :
                                                                    (e === "dark") ?
                                                                    <div className={s.dark} key={17}>{"SINIESTRO"}</div> :
                                                                    (e === "fairy") ?
                                                                    <div className={s.fairy} key={18}>{"HADA"}</div> :
                                                                    (e === "unknown") ?
                                                                    <div className={s.unknown} key={19}>{"DESCONOCIDO"}</div> :
                                                                    (e === "shadow") ?
                                                                    <div className={s.shadow} key={20}>{"SOMBRA"}</div> : null
                                                                    )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
