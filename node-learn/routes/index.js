// import express
import express from "express";
// import controllers
import { getProducts, 
    getProductById, 
    saveProduct, 
    updateProduct,
    deleteProduct } from "../controllers/productController.js";
import { serviceRatesAnterAja } from "../controllers/anterAjaController.js";
 
    // express router
const router = express.Router();
 
// Route get All Products
router.get('/', getProducts);
router.post('/serviceRates', serviceRatesAnterAja)
// Route get single Product
router.get('/:id', getProductById);
// Route CREATE Product
router.post('/', saveProduct);
// Route UPDATE Product
router.patch('/:id', updateProduct);
// Route DELETE Product
router.delete('/:id', deleteProduct);
 
// export router
export default router;