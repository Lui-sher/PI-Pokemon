import s from './Card2.module.css';
import defaulImage from '../Images/defaultImage.png';
import * as type from '../Images/imagenes';

export default function Card2 ({pokedexNumber='XXX', image=defaulImage, name='pokemon', pokemonTypes=["electric", "fire"]}) {
    return (
        <div className={s.trapecio}>
            <div className={s.lienzo}>
                <img src={image} alt='Pokémon'/>
                <div className={s.datos}>
                    <div className={s.name}>{name.toUpperCase()}</div>
                    <div className={s.type}>Tipo: 
                    {
                        pokemonTypes?.map(e => {
                            return (
                                <img className={s[e]} src={[type[e]]} alt='pokemon type'/>
                            )
                        })}
                    </div>
                    <div className={s.pokedex}>Pokedex: {pokedexNumber}</div>
                </div>
                
            </div>
        </div>
    )
}