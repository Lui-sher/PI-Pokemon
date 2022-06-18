const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const { Pokemon, PokemonTypes } = require('../db.js');



const CargarAllPokemon = async () => {

  let response = await fetch('https://pokeapi.co/api/v2/type');
  let obj = await response.json()
  let arrayTypes = obj.results.map(e => e.name);
  await arrayTypes.map(e => PokemonTypes.findOrCreate({where: {name: e}}))

  const arrayRandom = [];

  for (let i = 0; arrayRandom.length < 40; i++) {
    let elemento = Math.floor((Math.random() * (898)) + 1);
    let repetido = arrayRandom.filter(e => e === elemento);
    if(repetido.length === 0){
      arrayRandom.push(elemento)
    }
  }
  console.log("pokemonsRouter/24 (ya cargue la tabla Types y cree el arrayRandon = )",arrayRandom)

  const allPokemonApi = [];
  for(let i = 0; i < arrayRandom.length; i++){
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${arrayRandom[i]}`)
      let data = await response.json();
      let infoApi = {
        image: data.sprites.other.home.front_default,
        pokedexNumber: data.id,                 //id
        name: data.name,
        hp: data.stats[0].base_stat,            //vida
        attack: data.stats[1].base_stat,        //fuerza
        defense: data.stats[2].base_stat,       //defensa
        speed: data.stats[5].base_stat,         //velocidad
        height: data.height,                    //altura
        weight: data.weight,                    //peso
        pokemonTypes: data.types.map(e => e.type.name) //tipo(s)
      } 
      allPokemonApi.push(infoApi)
  }
  // console.log(allPokemonApi)

  const allPokemonDb = await Pokemon.findAll({
    include: [
      {model: PokemonTypes,
      attributes:['name'],
      through:{
        attributes: [],
      }
    }
  ]
  })
  
  const aux = [];
  for (let i = 0; i < allPokemonDb.length; i++) {
    aux.push({
      name: allPokemonDb[i].name,
      image: allPokemonDb[i].image,
      pokedexNumber: allPokemonDb[i].pokedexNumber,
      hp: allPokemonDb[i].hp,
      attack: allPokemonDb[i].attack,
      defense: allPokemonDb[i].defense,
      speed: allPokemonDb[i].speed,
      height: allPokemonDb[i].height,
      weight: allPokemonDb[i].weight,
      pokemonTypes: allPokemonDb[i].pokemonTypes.map(e => {return (e.name)})
    })
  }
  
  let allPokemon = [...allPokemonApi, ...aux]
  
  return allPokemon;
}

router.get('', async (req, res) => {
  const {name} = req.query;


  if(name){
    const pokemonBd = await Pokemon.findAll({
      where:{name},
      include: {model: PokemonTypes}
    });

    if(pokemonBd.length > 0){
      const {name, pokedexNumber, hp, attack, defense, speed, height, weight, pokemonTypes} = pokemonBd[0];
      const filtro = {
        name, 
        pokedexNumber, 
        hp, 
        attack, 
        defense, 
        speed, 
        height, 
        weight, 
        pokemonTypes
      }
      
      return res.send(filtro)

    } else {
      
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      if(response.status === 404){return res.status(404).send('nombre no encontrado')}

          let data = await response.json();
          let infoPokemon = {
            image: data.sprites.other.home.front_default,
            pokedexNumber: data.id,                  //id
            name: data.name,
            hp: data.stats[0].base_stat,             //vida
            attack: data.stats[1].base_stat,         //fuerza
            defense: data.stats[2].base_stat,        //defensa
            speed: data.stats[5].base_stat,          //velocidad
            height: data.height,                     //altura
            weight: data.weight,                     //peso
            pokemonTypes: data.types.map(e => e.type.name), //tipo(s)
          }
      return res.json(infoPokemon);
    }
  }

  let info = await CargarAllPokemon()
  res.json(info);
});

router.get('/:id', async (req, res) => {
  let {id} = req.params
  console.log('PokemonRouter/114 con params = ', id);

  if(id > 0 && id <= 898){

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        let data = await response.json();
        let infoApi = {
          image: data.sprites.other.home.front_default,
          pokedexNumber: data.id,             //id
          name: data.name,
          hp: data.stats[0].base_stat,        //vida
          attack: data.stats[1].base_stat,    //fuerza
          defense: data.stats[2].base_stat,   //defensa
          speed: data.stats[5].base_stat,     //velocidad
          height: data.height,                //altura
          weight: data.weight,                //peso
          pokemonTypes: data.types.map(e => e.type.name),
        }

    return res.send(infoApi)
  }

  if(id>898){
    const pokemonBd = await Pokemon.findAll({
      where:{pokedexNumber: id},
      include: [
          {model: PokemonTypes,
          attributes:['name'],
          through:{
            attributes: [],
          }
        }
      ]
    });

    if(pokemonBd.length > 0){
      const {name, pokedexNumber, hp, attack, defense, speed, height, weight, pokemonTypes} = pokemonBd[0];
      const filtro = {
        name, 
        pokedexNumber, 
        hp, 
        attack, 
        defense, 
        speed, 
        height, 
        weight, 
        pokemonTypes
      }
      
      return res.send(filtro)
    }
  }
  res.status(404).send('la id enviada no es valida o el pokemon no existe');
});

let id = 899

router.post('', async (req, res) => {
console.log("soy req.body",req.body)
  const { name, image, hp, attack, defense, speed, height, weight, pokemonTypes} = req.body
  const newPokemon = await Pokemon.create({
    pokedexNumber: id++,
    name,
    image,
    hp,
    attack,
    defense,
    speed,
    height,
    weight
  })

  const DBTypes = await PokemonTypes.findAll({
    where: {name: pokemonTypes}
  })

  newPokemon.addPokemonTypes(DBTypes)
  console.log("Soy new pokemon tratando de tener types" ,DBTypes)
  res.json(newPokemon)
})


module.exports = router;

// [ ] GET /pokemons:
// Obtener un listado de los pokemons desde pokeapi.
// Debe devolver solo los datos necesarios para la ruta principal
// [ ] GET /pokemons/{idPokemon}:
// Obtener el detalle de un pokemon en particular
// Debe traer solo los datos pedidos en la ruta de detalle de pokemon
// Tener en cuenta que tiene que funcionar tanto para un id de un pokemon existente en pokeapi o uno creado por ustedes
// [ ] GET /pokemons?name="...":
// Obtener el pokemon que coincida exactamente con el nombre pasado como query parameter (Puede ser de pokeapi o creado por nosotros)
// Si no existe ningún pokemon mostrar un mensaje adecuado
// [ ] POST /pokemons:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body
// Crea un pokemon en la base de datos
// [ ] GET /types:
// Obtener todos los tipos de pokemons posibles
// En una primera instancia deberán traerlos desde pokeapi y guardarlos en su propia base de datos y luego ya utilizarlos desde allí