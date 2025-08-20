const buyProductServices = async(productId, userId) => {
    try {
        console.log(`Buy product with ID: ${productId} for user ID: ${userId}`);
    }
    catch(error) {
        console.error("Error in buyProductService:", error);
    }
}

module.export = buyProductService;