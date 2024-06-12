import {prismaClient} from '../../database/prismaClient.js'

export class UpdateTasController{
    async handle(req, res){
        const tas = await prismaClient.tas.update({
            where: {
                id: req.params.id
            },
            data: {
                hostname: req.body.hostname,
                wifi_name: req.body.wifi_name,
            }
        })
        return res.status(200).json(tas)
    }
}