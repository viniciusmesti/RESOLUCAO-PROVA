import PokemonService from "./pokemon.service"

class PokemonController {
    async consumirPokeData(req, res) {
        try {
            await PokemonService.consumirPokeData()
            res.send('ok')
        } catch (error) {
            console.log(error)
        }
    }

    async pokemonsByType(req, res) {
        try {
            await PokemonService.pokemonsByType()
            res.send('ok')
        } catch (error) {
            console.log(error)
        }
    }

    async getPokemonsByType(req, res) {
        const {type} = req.params

        try {
            const pokemons = await PokemonService.getPokemonsByType(type)
            res.json(pokemons)
        } catch (error) {
            console.log(error)
        }
    }

    async getPokemonsByNumDex(req, res) {
        const {numDex} = req.params

        try {
            const pokemons = await PokemonService.getPokemonsByNumDex(numDex)
            res.json(pokemons)
        } catch (error) {
            console.log(error)
        }
    }

    async getPokemonsByNome(req, res) {
        const {nome} = req.params

        try {
            const pokemon = await PokemonService.getPokemonsByNome(nome)
            res.json(pokemon)
        } catch (error) {
            console.log(error)
        }
    }
}

export default new PokemonController()
