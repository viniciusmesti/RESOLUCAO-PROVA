import fs from 'fs/promises'
import PokemonModel from './pokemon.schema'


function getRandomMoves(movesList) {
    const moves: Object[] = []

    while(moves.length != 4){
        let randomNumber = Math.floor(Math.random() * movesList.length)

        if(!moves.includes(moves[randomNumber])){
            moves.push(movesList[randomNumber])
        }
    }

    return moves
}

class PokemonService {
    async consumirPokeData() {
        const pokemons = await fetch('http://localhost:3000/pokemons-data').then(response => response.json()).then(response => response.slice(0, 10))
        
        const mappedPokemons = pokemons.map(pokemon => {
            return {
                nome: pokemon.name,
                tipo: pokemon.types[0].type.name,
                status: pokemon.stats,
                numDex: pokemon.game_indices[9].game_index,
                altura: pokemon.height,
                peso: pokemon.weight,
                moves: getRandomMoves(pokemon.moves)
            }
        })

        await fs.writeFile('pokemon.json', JSON.stringify(mappedPokemons, null, 2))
        await PokemonModel.insertMany(mappedPokemons)
    } 

    async pokemonsByType() {
        const pokemons = await fs.readFile('pokemon.json', {encoding: 'utf-8'}).then(response => JSON.parse(response))

        const pokemonsByType = pokemons.reduce((pokemonsByType, currentPokemon) => {
            pokemonsByType[currentPokemon.tipo] = pokemonsByType[currentPokemon.tipo] || []
            pokemonsByType[currentPokemon.tipo].push(currentPokemon)
            return pokemonsByType
        }, {})

        await fs.writeFile('pokemonsByType.json', JSON.stringify(pokemonsByType, null, 2))

        return pokemonsByType
    }

    async getPokemonsByType(type) {
        return await PokemonModel.find({tipo: type})
    }

    async getPokemonsByNumDex(numDex) {
        return await PokemonModel.find({numDex})
    }

    async getPokemonsByNome(nome) {
        return await PokemonModel.find({nome})
    }
}

export default new PokemonService()