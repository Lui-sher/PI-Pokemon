import { FILTRAR, GET_ALL_POKEMON, LOADING, ORDENAR } from "../Actions/index";

const initialState = {
    loading: true,
    notFound: false,
    auxiliar: [],
    allPokemon: [],
}

export default function reducer (state=initialState, action){
    switch (action.type) {
        case GET_ALL_POKEMON:
            // console.log(action.payload)
            return {
                ...state,
                loading: !state.loading,
                auxiliar: action.payload,
                allPokemon: action.payload,
            }

        case ORDENAR:
            function quickSort(array) {

                if (array.length <= 1) return array;
              
                let pivote = 0;
                if(action.payload === "Pokedex ↑") pivote = array[0].pokedexNumber;
                if(action.payload === "Pokedex ↓") pivote = array[0].pokedexNumber;
                if(action.payload === "Fuerza ↑") pivote = array[0].attack;
                if(action.payload === "Fuerza ↓") pivote = array[0].attack;
                let arrI = [];
                let arrD = [];
              
                for(let i = 1; i < array.length; i++){
                  if(action.payload === "Pokedex ↑"){
                    if(array[i].pokedexNumber < pivote) {
                      arrI.push(array[i]);
                    } else {
                      arrD.push(array[i]);
                    }
                  }
                  if(action.payload === "Pokedex ↓"){
                    if(array[i].pokedexNumber > pivote) {
                      arrI.push(array[i]);
                    } else {
                      arrD.push(array[i]);
                    }
                  }
                  if(action.payload === "Fuerza ↑"){
                    if(array[i].attack < pivote) {
                      arrI.push(array[i]);
                    } else {
                      arrD.push(array[i]);
                    }
                  }
                  if(action.payload === "Fuerza ↓"){
                    if(array[i].attack > pivote) {
                      arrI.push(array[i]);
                    } else {
                      arrD.push(array[i]);
                    }
                  }
                }
                return [...quickSort(arrI),...[array[0]],...quickSort(arrD)];
            }

            function SortArray(x, y){
                if(action.payload === "Nombre A → Z") return x.name.localeCompare(y.name);
                else return y.name.localeCompare(x.name);
            }
            let value = [];

            if(action.payload === "Nombre A → Z" || action.payload === "Nombre Z → A"){
                value = [...state.allPokemon.sort(SortArray)]
                return {
                    ...state,
                    allPokemon: value,
                }
            } else {
                value = quickSort(state.allPokemon)
                return {
                    ...state,
                    allPokemon: value,
                }
            }

        case FILTRAR:
            if(action.payload === "Todos"){
                return {
                    ...state,
                    notFound: false,
                    allPokemon: state.auxiliar,
                }
            }
            if(action.payload === "Existentes"){
                return {
                    ...state,
                    notFound: false,
                    allPokemon: state.auxiliar.filter(e => e.pokedexNumber < 899)

                }
            }
            if(action.payload === "Creados"){
                let resultado = state.auxiliar.filter(e => e.pokedexNumber > 899);
                if(resultado.length === 0){
                    return {
                        ...state,
                        notFound: true,
                    }
                }else {
                    return {
                    ...state,
                    notFound: false,
                    allPokemon: resultado,
                    }
                }
            }
            if(action.payload === "Tipo Normal"){
                let resultado = state.auxiliar.filter(e => e.pokemonTypes.find(e => e === "normal"))
                if(resultado.length === 0){
                    return{
                        ...state,
                        notFound: true,
                    }
                } else return {
                    ...state,
                    notFound: false,
                    allPokemon: resultado,
                }
            }
            if(action.payload === "Tipo Lucha"){
                let resultado = state.auxiliar.filter(e => e.pokemonTypes.find(e => e === "fighting"))
                if(resultado.length === 0){
                    return{
                        ...state,
                        notFound: true,
                    }
                } else return {
                    ...state,
                    notFound: false,
                    allPokemon: resultado,
                }
            }
            if(action.payload === "Tipo Volador"){
                let resultado = state.auxiliar.filter(e => e.pokemonTypes.find(e => e === "flying"))
                if(resultado.length === 0){
                    return{
                        ...state,
                        notFound: true,
                    }
                } else return {
                    ...state,
                    notFound: false,
                    allPokemon: resultado,
                }
            }
            if(action.payload === "Tipo Veneno"){
                let resultado = state.auxiliar.filter(e => e.pokemonTypes.find(e => e === "poison"))
                if(resultado.length === 0){
                    return{
                        ...state,
                        notFound: true,
                    }
                } else return {
                    ...state,
                    notFound: false,
                    allPokemon: resultado,
                }
            }
            if(action.payload === "Tipo Tierra"){
                let resultado = state.auxiliar.filter(e => e.pokemonTypes.find(e => e === "ground"))
                if(resultado.length === 0){
                    return{
                        ...state,
                        notFound: true,
                    }
                } else return {
                    ...state,
                    notFound: false,
                    allPokemon: resultado,
                }
            }
            if(action.payload === "Tipo Roca"){
                let resultado = state.auxiliar.filter(e => e.pokemonTypes.find(e => e === "rock"))
                if(resultado.length === 0){
                    return{
                        ...state,
                        notFound: true,
                    }
                } else return {
                    ...state,
                    notFound: false,
                    allPokemon: resultado,
                }
            }
            if(action.payload === "Tipo Bicho"){
                let resultado = state.auxiliar.filter(e => e.pokemonTypes.find(e => e === "bug"))
                if(resultado.length === 0){
                    return{
                        ...state,
                        notFound: true,
                    }
                } else return {
                    ...state,
                    notFound: false,
                    allPokemon: resultado,
                }
            }
            if(action.payload === "Tipo Fantasma"){
                let resultado = state.auxiliar.filter(e => e.pokemonTypes.find(e => e === "ghost"))
                if(resultado.length === 0){
                    return{
                        ...state,
                        notFound: true,
                    }
                } else return {
                    ...state,
                    notFound: false,
                    allPokemon: resultado,
                }
            }
            if(action.payload === "Tipo Acero"){
                let resultado = state.auxiliar.filter(e => e.pokemonTypes.find(e => e === "steel"))
                if(resultado.length === 0){
                    return{
                        ...state,
                        notFound: true,
                    }
                } else return {
                    ...state,
                    notFound: false,
                    allPokemon: resultado,
                }
            }
            if(action.payload === "Tipo Fuego"){
                let resultado = state.auxiliar.filter(e => e.pokemonTypes.find(e => e === "fire"))
                if(resultado.length === 0){
                    return{
                        ...state,
                        notFound: true,
                    }
                } else return {
                    ...state,
                    notFound: false,
                    allPokemon: resultado,
                }
            }
            if(action.payload === "Tipo Agua"){
                let resultado = state.auxiliar.filter(e => e.pokemonTypes.find(e => e === "water"))
                if(resultado.length === 0){
                    return{
                        ...state,
                        notFound: true,
                    }
                } else return {
                    ...state,
                    notFound: false,
                    allPokemon: resultado,
                }
            }
            if(action.payload === "Tipo Planta"){
                let resultado = state.auxiliar.filter(e => e.pokemonTypes.find(e => e === "grass"))
                if(resultado.length === 0){
                    return{
                        ...state,
                        notFound: true,
                    }
                } else return {
                    ...state,
                    notFound: false,
                    allPokemon: resultado,
                }
            }
            if(action.payload === "Tipo Electrico"){
                let resultado = state.auxiliar.filter(e => e.pokemonTypes.find(e => e === "electric"))
                if(resultado.length === 0){
                    return{
                        ...state,
                        notFound: true,
                    }
                } else return {
                    ...state,
                    notFound: false,
                    allPokemon: resultado,
                }
            }
            if(action.payload === "Tipo Psíquico"){
                let resultado = state.auxiliar.filter(e => e.pokemonTypes.find(e => e === "psychic"))
                if(resultado.length === 0){
                    return{
                        ...state,
                        notFound: true,
                    }
                } else return {
                    ...state,
                    notFound: false,
                    allPokemon: resultado,
                }
            }
            if(action.payload === "Tipo Hielo"){
                let resultado = state.auxiliar.filter(e => e.pokemonTypes.find(e => e === "ice"))
                if(resultado.length === 0){
                    return{
                        ...state,
                        notFound: true,
                    }
                } else return {
                    ...state,
                    notFound: false,
                    allPokemon: resultado,
                }
            }
            if(action.payload === "Tipo Dragón"){
                let resultado = state.auxiliar.filter(e => e.pokemonTypes.find(e => e === "dragon"))
                if(resultado.length === 0){
                    return{
                        ...state,
                        notFound: true,
                    }
                } else return {
                    ...state,
                    notFound: false,
                    allPokemon: resultado,
                }
            }
            if(action.payload === "Tipo Siniestro"){
                let resultado = state.auxiliar.filter(e => e.pokemonTypes.find(e => e === "dark"))
                if(resultado.length === 0){
                    return{
                        ...state,
                        notFound: true,
                    }
                } else return {
                    ...state,
                    notFound: false,
                    allPokemon: resultado,
                }
            }
            if(action.payload === "Tipo Hada"){
                let resultado = state.auxiliar.filter(e => e.pokemonTypes.find(e => e === "fairy"))
                if(resultado.length === 0){
                    return{
                        ...state,
                        notFound: true,
                    }
                } else return {
                    ...state,
                    notFound: false,
                    allPokemon: resultado,
                }
            }
            break;

        case LOADING:
            return {
                ...state,
                loading: !state.loading,
            }
    
        default:
            return {...state};
    }
}