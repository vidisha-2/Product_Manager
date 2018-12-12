const controller = require('./../controller/controller');
const bp = require('body-parser');
module.exports= function(app){
    // app.use(bp.json());

    app.get('/api/products', controller.allProducts);
     app.get('/api/products/:id', controller.show);
    app.post('/api/products', controller.createProduct);
    app.put('/api/products/:id', controller.editProduct);
    app.delete('/api/products/:id', controller.deleteProduct);
    app.all('*', controller.catch);

}