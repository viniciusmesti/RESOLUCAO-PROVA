import { Schema, model } from "mongoose";

const PokemonSchema = new Schema({
    nome: String,
    tipo: String,
    status: [],
    numDex: Number,
    altura: Number,
    peso: Number,
    moves: []
})

export default model('Pokemon', PokemonSchema)
