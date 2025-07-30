const express = require('express');
const router=express.Router();
const fs = require('fs'); // Módulo para leer archivos
// Lee el archivo hincha.json
const datosDeportivos = JSON.parse(fs.readFileSync('./data.json', 'utf8'));


//definimos variables y especficamos de donde llamamos las clases
const gasto= require('../controller/gastos.controllers');
const usuario= require('../controller/usuarios.controllers');



// ENDPOINTS CRUD para gastos (para Thunder Client)
router.get('/gastos', gasto.getGastos); // Obtener todos
router.get('/gastos/:id', gasto.getGastoById); // Obtener uno por ID
router.post('/gastos', gasto.addGastos); // Crear
router.put('/gastos/:id', gasto.editGastos); // Actualizar
router.delete('/gastos/:id', gasto.deleteGastos); // Eliminar

//lamamos al metodo getUsuarios y addUsuarios desde la clase especificada usuario
//cuando ingresemos a /misitio/usuarios
router.get('/misitio/usuarios',usuario.getUsuarios);
router.post('/misitio/usuarios',usuario.addUsuarios);


// Ruta de /misitio
router.get('/misitio', (req, res) => {
  console.log("Ruta '/misitio' solicitada");
  res.send('Bienvenido al Backend del GASTO1 :))))))');
});
 
// Ruta raíz para devolver los datos del JSON
router.get('/datos', (req, res) => {
  res.json(datosDeportivos); // Envía los datos del JSON
});

// Ruta de /misitio/about
router.get('/misitio/about', (req, res) => {
  console.log("Ruta '/misitio/about' solicitada");
  res.send('<h1>Bienvenido al Backend del GASTO1 y la informacions :))))))</h1>');
});

router.get('/misitio/contacto',(req,res)=>{
    res.sendFile('./foto.avif',{
        root:__dirname
    });
})

/*
router.get('/misitio/gastos', (req, res) => {
  res.send('Registro Gasto');
});
[
  { "nombre": "Luis", "apellido": "Ramírez", "edad": 28 },
  { "nombre": "Camila", "apellido": "Pérez", "edad": 34 },
  { "nombre": "Andrés", "apellido": "Gómez", "edad": 22 },
  { "nombre": "Sofía", "apellido": "Martínez", "edad": 30 },
  { "nombre": "Mateo", "apellido": "Herrera", "edad": 40 },
  { "nombre": "Valentina", "apellido": "Díaz", "edad": 19 },
  { "nombre": "Sebastián", "apellido": "Castillo", "edad": 26 },
  { "nombre": "Isabela", "apellido": "Navarro", "edad": 33 },
  { "nombre": "Tomás", "apellido": "Rojas", "edad": 31 },
  { "nombre": "Daniela", "apellido": "Ortega", "edad": 24 }
]
app.post('/misitio/gastos', (req, res) => {
  res.send('Registro Gasto');
});
*/
router.use((req, res) => {
  res.status(404).send('No se encuentra la página');
});

module.exports=router;