import { Router } from "express"
import PokemonController from "./pokemon/pokemon.controller"
import TeamController from "./team/team.controller"

const router = Router()

router.post('/consumirData', PokemonController.consumirPokeData)
router.get('/pokemonsByType', PokemonController.pokemonsByType)
router.get('/pokemon/type/:type', PokemonController.getPokemonsByType)
router.get('/pokemon/numDex/:numDex', PokemonController.getPokemonsByNumDex)
router.get('/pokemon/nome/:nome', PokemonController.getPokemonsByNome)

router.post('/team', TeamController.create)
router.get('/team', TeamController.find)
router.get('/team/trainerName/:trainerName', TeamController.findByTrainerName)
router.put('/team', TeamController.update)
router.delete('/team/:trainerName', TeamController.delete)

export default router