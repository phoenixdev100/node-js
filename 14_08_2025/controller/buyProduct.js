const buyServices = require('../services/buyProductServices.js');
const byProduct = async(req,res) =>{
    try{
        const productId = req.params.id;
        buyServices(productId);
    }
    catch (error) {
        console.error("Error in buyProduct:",error);
        res.status(500).json({message: "Internal Server Error"})
    }
}