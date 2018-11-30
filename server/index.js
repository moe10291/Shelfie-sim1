require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const massive= require('massive');
const controller = require('./controller')

const app = express();

massive(process.env.CONNECTION_STRING)
.then( (dbInstance) => {
    app.set('db', dbInstance)

    app.listen(4000, () => {
        console.log('Server listening to Port 4000')
    });
})

app.use(bodyParser.json());

app.get('/api/inventory', controller.getData);

app.get('/api/inventory:id', controller.getOne)

app.post('/api/product', controller.AddProduct);

app.put('/api/inventory/:id', controller.updateProduct);

app.delete('/api/inventory/:id', controller.deleteProduct);








