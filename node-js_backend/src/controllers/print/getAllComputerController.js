import {prismaClient} from '../../database/prismaClient.js'

export class GetAllComputerController{
    async handle(req, res){
        const computer = await prismaClient.computer.findMany();
        return res.status(200).json(computer);
    }
}