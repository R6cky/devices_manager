import {prismaClient} from '../../database/prismaClient.js';

export class DeleteComputerController{
    async handle(req, res){
        const computer = await prismaClient.computer.delete({
            where: {
                id: req.params.id
            }
        });
        return res.status(204).json(computer);
    }
}