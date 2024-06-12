import {prismaClient} from '../../database/prismaClient.js'


export class GetComputerByIdController{
    async handle(req, res){
        
        const computer = await prismaClient.computer.findUnique({
            where:{
                id: req.params.id
            }
        })
        return res.json(computer)
    }
}