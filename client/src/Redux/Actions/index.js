export const GET_ALL_POKEMON = 'get_all_pokemon';
export const LOADING = 'loading';
export const ORDENAR = 'ordenar';
export const FILTRAR = 'filtrar';


export function getAllPokemon (data){
    return {
        type: GET_ALL_POKEMON,
        payload: data
    }
}

export function ordenar (tipo){
    return {
        type: ORDENAR,
        payload: tipo,
    }
}

export function filtrar (tipo){
    return {
        type: FILTRAR,
        payload: tipo
    }
}

export function loading(){
    return {
        type: LOADING
    }
} 

export function requestBd() {
    return function (dispatch) {
      dispatch(loading());
      fetch(`http://localhost:3001/pokemons`)
        .then(r => r.json())
        .then(json => dispatch(getAllPokemon(json)))
        .catch(e => console.log(e));
    }
  }