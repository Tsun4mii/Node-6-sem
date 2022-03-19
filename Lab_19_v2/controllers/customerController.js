const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient()

module.exports = {
    async getAll(req, res, next){
        await prisma.customer.findMany().then(data => {res.status(200).json({customers: data})});
    },
    async addCustomer(req, res){
        await prisma.customer.create({
            data:{
                name: req.body.name,
                surname: req.body.surname
            }
        }).then(data => {res.status(200).json({added_customer: data})});
    },
    async getPage(req, res){
        res.sendFile('E:\\3rd-course\\2nd-sem\\Node\\Lab_19_v2\\views\\customer\\index.html')
    },
    async deleteCustomer(req, res){
        await prisma.customer.delete({where:{id: Number(req.body.id)}}).then(data => {res.status(200).json({deleted_customer: data})});
    }
}