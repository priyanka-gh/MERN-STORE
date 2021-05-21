const express=require("express");
const router=express.Router();

const{isSignedIn, isAuthenticated,isAdmin}=require("../controllers/auth");
const{ getProductById, createProduct, getProduct, photo, updateProduct, deleteProduct, getAllProducts, getAllUniqueCategories}=require("../controllers/product");
const{getUserById, getUser}=require("../controllers/user");

//params
router.param("userId",getUserById);
router.param("productId", getProductById);

//actual routes
router.post("/product/create/:userId",isSignedIn,isAuthenticated,isAdmin, createProduct);

//read routes(both)
router.get("/product/:productId",getProduct);
//middleware for optimizing 
router.get("/product/photo/:productId",photo);


//delete routes

router.delete("/product/:productId/:userId",isSignedIn, isAuthenticated, isAdmin, deleteProduct);

//update route
router.put("/product/:productId/:userId",isSignedIn, isAuthenticated, isAdmin, updateProduct);

//listing routes
router.get("/products", getAllProducts);

router.get("/products/categories", getAllUniqueCategories);

module.exports=router;