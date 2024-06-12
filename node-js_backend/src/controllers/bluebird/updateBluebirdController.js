import {prismaClient} from '../../database/prismaClient.js'


export class UpdateBluebirdController{
    async handle(req, res){    

        const blueBird  = await prismaClient.blueBird.update({
            where:{
                id: req.params.id
            },
            data:{
                serial_name: req.body.serial_name,
                host_name: req.body.host_name,
                fix_date: req.body.fix_date,
                description: req.body.description
            }
        }) 
        return res.json(blueBird)

    }

}
