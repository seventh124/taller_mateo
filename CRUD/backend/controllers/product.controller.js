const {product_model} = require('../models');

getAllProducts = (req, res) => {
    product_model.find().exec((error, products)=> {
        if(error) return res.status(500).json({error: true, mensaje: error});
        res.json({products});
    })
};

addProduct= (req, res) => {
    const product_new = new product_model(req.body);
    product_new.save((err, product) => {
        if(errpr) return res.status(500).json({error:true, mensaje: error});
        res.json({mensaje: req.body.description + "Producto agregado satisfactoriamente"})
    })
}

module.exports = Object.freeze({
    getAllProducts,
    addProduct
});