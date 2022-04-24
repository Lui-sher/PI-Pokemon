export const GET_ALL_POKEMON = 'get_all_pokemon';
export const LOADING = 'loading';
export const ORDENAR = 'ordenar';
export const FILTRAR = 'filtrar';
export const SHOW_CARD = 'show_card';
export const ON_SEARCH = 'on_search';
export const GET_ONE_POKEMON = 'get_one_pokemon';


export function getAllPokemon (data){
    return {
        type: GET_ALL_POKEMON,
        payload: data
    }
}

export function getOnePokemon (data){
    return {
        type: GET_ONE_POKEMON,
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

export function showCard (pokemon){
    return{
        type: SHOW_CARD,
        payload: pokemon,
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

export function onSearch(data) {

    if(typeof(data) === 'string'){

        return function (dispatch) {
            dispatch(loading());
            fetch(`http://localhost:3001/pokemons?name=${data}`)
                .then(r => r.json())
                .then(json => dispatch(getOnePokemon(json)))
                .catch(e => dispatch(getOnePokemon(e)));
        }
    } else {

        return function (dispatch) {
            dispatch(loading());
            fetch(`http://localhost:3001/pokemons/${data}`)
                .then(r => r.json())
                .then(json => dispatch(getOnePokemon(json)))
                .catch(e => dispatch(getOnePokemon(e)));
        }
    }
}