const express = require('express');
require('dotenv').config();

const app = express();

//Exposicion del backend
const cors = require('cors');
app.use(cors());

//Capturamos el body de las peticiones
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//Conexion con la base de datos
const mongoose = require('mongoose');
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.f0n1w.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;   
const option = {useNewUrlParser: true, useUnifiedTopology: true};
mongoose.connect(uri, option)
.then(() => console.log("Base de datos conectada"))
.catch((e) => console.log("error db:", e));

//Importemos las rutas
const {product_routes} = require('./routes');
app.use('/api/v1/product', product_routes);

//Nuestro servidor debe estar escuchando
app.listen(process.env.PORT, () => {console.log('Servidor a su servicio en el puerto ', process.env.PORT)});