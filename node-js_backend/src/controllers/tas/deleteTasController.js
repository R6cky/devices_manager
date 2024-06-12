import {prismaClient} from '../../database/prismaClient.js';

export class DeleteTasController{
    async handle(req, res){
        const tas = await prismaClient.tas.delete({
            where: {
                id: req.params.id
            }
        });
        return res.status(204).json( tas);
    }
}