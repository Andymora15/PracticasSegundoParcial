const express = require('express');
const app = express();
const morgan=require('morgan');
const port = 3000;
const {mongoose}=require('./database');


//middleware
app.use(morgan('dev'));
app.use(express.json());

//definimos las rutas que vamos a usar
app.use(require('./src/routes/server.routes'))

//creamos una funcion que nos devolvera el la ruta, protocolo, host y URL
function looger(req,res,next){
  console.log('Ruta Recibida '+ req.protocol+'://'+req.get('host')+req.originalUrl);
  next();
}


// Inicia el servidor
app.listen(port, () => {
  console.log('Example app listening on port '+port);
});