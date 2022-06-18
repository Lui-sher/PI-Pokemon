import s from "./Card.module.css"
import defaulImage from '../Images/defaultImage.png';
import * as type from '../Images/imagenes';


export default function Card({pokedexNumber='XXX', image=defaulImage, name='pokemon', pokemonTypes=["electric", "fire"]}){ //recibe un objeto

    // if(pokedexNumber > 898){
    // let aux =pokemonTypes.map(e => e.name);
    // pokemonTypes = aux;
    // }
    let i = 0

    return(
        <div className={s.contenedor}>
                <div className={s[pokemonTypes[0]]}>
                    <div className={s.lienzo}>
                        <div className={s.imagen}><img src={image} alt='Pokémon'/></div>
                        <div className={s.info}>
                            <div className={s.name}>
                                <h5>{name.toUpperCase()}</h5>
                            </div>
                            <div className={s.data}>
                                <div className={s.pokedex}>
                                    POKEDEX: No. {pokedexNumber}
                                </div>
                                <div className={s.type}>
                                    <div>TIPO</div>
                                    { 
                                        // pokedexNumber > 898 ?
                                        // pokemonTypes?.map(e => {
                                        //     return (
                                        //         <img key={i++} src={[type[e.name]]} alt='pokemon type'/>
                                        //     )
                                        // }) :
                                        pokemonTypes?.map(e => {
                                            return (
                                                <img key={i++} src={[type[e]]} alt='pokemon type'/>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
