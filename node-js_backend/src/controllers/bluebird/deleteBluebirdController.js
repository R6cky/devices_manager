import {prismaClient} from '../../database/prismaClient.js'


export class DeleteBluebirdController {
    async handle(req, res) {
        const bluebird = await prismaClient.blueBird.delete({
            where: {
                id: req.params.id
            }
        })
        return res.json(bluebird)

        
    }
}
