import TeamService from "./team.service"

class PokemonController {
    async create(req, res) {
        const {trainerName, team} = req.body
        try {
            await TeamService.create(trainerName, team)
            res.send('ok')
        } catch (error) {
            console.log(error)
        }
    }

    async find(req, res){
        try {
            const teams = await TeamService.find()
            res.json(teams)
        } catch (error) {
            console.log(error)
        }
    }

    async findByTrainerName(req, res){
        const {trainerName} = req.params
        
        try {
            const team = await TeamService.findByTrainerName(trainerName)
            res.json(team)
        } catch (error) {
            console.log(error)
        }
    }

    async update(req, res) {
        const {trainerName, newData} = req.body

        try {
            const updatedTeam = await TeamService.update(trainerName, newData)
            res.json(updatedTeam)
        } catch (error) {
            console.log(error)
        }
    }

    async delete(req, res) {
        const {trainerName} = req.params

        try {
            const deleteTeam = await TeamService.delete(trainerName)
            res.json(deleteTeam)
        } catch (error) {
            console.log(error)
        }
    }
}

export default new PokemonController()
