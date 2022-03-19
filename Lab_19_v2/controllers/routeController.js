const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient()

module.exports = {
    async getAll(req, res, next){
        await prisma.route.findMany().then(data => {res.status(200).json({routes: data})});
    },
    async addRoute(req, res){
        await prisma.route.create({
            data:{
                route_name: req.body.name,
                route_duration: Number(req.body.duration),
                route_cost: Number(req.body.cost)
            }
        }).then(data => {res.status(200).json({added_route: data})});
    },
    async getPage(req, res){
        res.sendFile('E:\\3rd-course\\2nd-sem\\Node\\Lab_19_v2\\views\\route\\index.html')
    },
    async deleteRoute(req, res){
        await prisma.route.delete({where:{id: Number(req.body.id)}}).then(data => {res.status(200).json({deleted_route: data})});
    }
}