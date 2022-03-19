const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient()

module.exports = {
    async getAll(req, res, next){
        await prisma.trip.findMany().then(data => {res.status(200).json({trips: data})});
    },
    async addTrip(req, res){
        await prisma.trip.create({
            data:{
                trip_date: req.body.date,
                trip_route: Number(req.body.route),
                trip_country: Number(req.body.country),
                trip_cost: Number(req.body.cost),
                trip_name: req.body.name
            }
        }).then(data => {res.status(200).json({added_trip: data})});
    },
    async getPage(req, res){
        res.sendFile('E:\\3rd-course\\2nd-sem\\Node\\Lab_19_v2\\views\\trip\\index.html')
    },
    async deleteTrip(req, res){
        await prisma.trip.delete({where:{id: Number(req.body.id)}}).then(data => {res.status(200).json({deleted_trip: data})});
    }
}