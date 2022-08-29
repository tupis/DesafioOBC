const Product = require('../models/Products')

module.exports = {
    async Create(req, res) {
        const {name, price, images, description, category, alt, size} = req.body;
        try {
            const newProduct = await Product.create({name, price, images, description, category, alt, size});
            res.status(200).json(newProduct);
        } catch (error) {
            res.status(420).end('<h1>Error</h1>')
        }
    },

    async Get (req, res) {
        const getProduct = await Product.findAll()
        res.json(getProduct)
    },


    async GetProduct (req, res) {
        const getProduct = await Product.findByPk(req.params.id)
        res.status(200).json(getProduct)
    },

    async Delete (req, res) {
        const findProduct = await Product.findByPk(req.params.id)
        await Product.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send(`${findProduct.name} foi removido do banco de dados`)
    },

    async Update (req, res) {
        const {name, value} = req.body;
        const beforeUpdate = await Product.findByPk(req.params.id)
        await Product.update({name, price, images, description, category, alt}, {
            where: {
                id: req.params.id
            }
        })
        const afterUpdate = await Product.findByPk(req.params.id)
        res.status(200).json({message: 'Foi atualizado com sucesso'})
    }
}