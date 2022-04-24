const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemons = require('./pokemonsRouter.js');
const types = require('./typesRouter.js')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//router.use(Router.json());
router.use('/pokemons', pokemons)
router.use('/types', types)

module.exports = router;


// [ ] GET /types:
// Obtener todos los tipos de pokemons posibles
// En una primera instancia deberán traerlos desde pokeapi y guardarlos en su propia base de datos y luego ya utilizarlos desde allí