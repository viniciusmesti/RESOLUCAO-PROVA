import { Schema, model } from "mongoose";

const TeamSchema = new Schema({
    trainerName: String,
    team: [{
        name: String
    }]
})

export default model('Team', TeamSchema)
