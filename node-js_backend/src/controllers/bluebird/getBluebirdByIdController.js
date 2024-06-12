import {prismaClient} from "../../database/prismaClient.js"

export class GetBluebirdByIdController{
    async handle (req, res) {
       //const idBluebird =  req.params.id
       // console.log(idBluebird)    
        const bluebird = await prismaClient.blueBird.findUnique({
            where: {
                id: req.params.id
            }
        })
        return res.json(bluebird)
    }   
}