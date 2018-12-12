const Product = require('./../model/models').Product;
var path = require('path');
module.exports ={
    allProducts: function(req, res){
        Product.find({})
        .then(data=>console.log("All Products",data)||res.json(data))
        .catch(errs=>console.log("Errors in finding", errs)||res.json(errs))
    },
    createProduct: function(req, res){
     
        Product.create(req.body)
        .then(data=>console.log("Created", data)||res.json(data))
        .catch(errs=>console.log("Error in creating",errs)||res.json(errs))
    },
    editProduct: function(req, res){
           console.log("we are in controller");
        Product.findByIdAndUpdate(req.params.id, req.body, {runValidators: true, new: true})
        .then(data=>console.log("Updated", data)||res.json(data))
        .catch(errs=>console.log("Error in editing",errs)||res.json(errs))
    },
    deleteProduct : function(req, res){
        Product.findByIdAndRemove(req.params.id)
        .then(data => console.log("deleted Product", data) || res.json(data))
        .catch(errs => console.log("had errors", errs) || res.json(errs))
    },
    show : function(req, res){
        Product.findById(req.params.id)
        .then(data=>console.log("Successfully displayed",data) || res.json(data))
        .catch(errs => console.log("It had errors", errs) || res.json(errs))
    },
    catch:function(req, res, next){
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    }
}