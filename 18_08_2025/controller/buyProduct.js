const buyService = require('../services/buyProductService');
const byProduct = async(req,res) =>{
    try{
        const productId = req.params.id;
        const userId = req.user.id;
        buyService(productId, userId);
    }
    catch (error) {
        console.error("Error in buyProduct:",error);
        res.status(500).json({message: "Internal Server Error"});
    }
}

module.export = buyProduct;