import { GET_ALL_POKEMON, LOADING, ORDENAR } from "../Actions/index";

const initialState = {
    loading: true,
    allPokemon: [],
}

export default function reducer (state=initialState, action){
    switch (action.type) {
        case GET_ALL_POKEMON:
            // console.log(action.payload)
            return {
                ...state,
                loading: !state.loading,
                allPokemon: action.payload
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
                console.log("me activé con Nombre AZ o ZA")
                if(action.payload === "Nombre A → Z") return x.name.localeCompare(y.name);
                else return y.name.localeCompare(x.name);
            }
            // console.log('reducer/34 ',action.payload)
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

        case LOADING:
            return {
                ...state,
                loading: !state.loading,
            }
    
        default:
            return {...state};
    }
}