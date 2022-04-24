const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const { PokemonTypes } = require('../db.js');
let gate = true;

router.get('/', async (req, res) => {

    if(gate){
        let response = await fetch(`https://pokeapi.co/api/v2/type`)
        let data = await response.json();
        let aux = []
        data.results.map(e => aux.push(e.name))
        //console.log(aux)
        aux.forEach( e => PokemonTypes.create({name: e}))
        gate = false;
    }

    const typesAll = await PokemonTypes.findAll();
    res.json(typesAll)
});

module.exports = router;