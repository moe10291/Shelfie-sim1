let id= 0;

module.exports= {

    //GET ALL
getData: (req, res) =>{
  
    const dbInstance= req.app.get('db');
    dbInstance.getAllData()
    .then(products => res.status(200).send(products))
    .catch(err => {
        res.status(500).send({errorMessage: "Unable to Get All Inventory"})
        console.log(err)
    });
    
},

//GET ONE
getOne: (req, res, next) => {
    const dbInstance= req.app.get('db');
    
    dbInstance.getOneData(id)
    .then(products => res.status(200).send(products[0]))
    .catch(err => {
        res.sendstatus(500)
    })

},

AddProduct: (req, res, next) => {
    const dbInstance= req.app.get('db');
    const{price, productName, img}= req.body;
    dbInstance.addInventory(price, productName, img)
    .then(products => {
        res.status(200).send(products[0])
    })
},

updateProduct: (req, res, next) => {
    const dbInstance= req.app.get('db');
    const{price, productName, img}= req.body;
    const {id}= req.params;
    dbInstance.updateData(price, productName, img)
    .then( () => {
        res.sendStatus(200);
    })
},

deleteProduct: (req, res, next) => {
    const dbInstance= req.app.get('db');
    const {id}= req.params;
    dbInstance.deleteData(id)
    .then( () => {
        res.sendStatus(200);
    })
    
}
}