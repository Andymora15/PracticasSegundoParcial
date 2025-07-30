const usuariosControllers = {};

//metodo añadir gastos
usuariosControllers.addUsuarios = async(req,res) => {
    console.log(req.body);
    res.send("Nuevo usuario registrado :)");
};

usuariosControllers.getUsuarios = async(req,res)=>{
    res.json(
        [
            { nombre: "Luis", apellido: "Ramírez", edad: 28 },
            { nombre: "Camila", apellido: "Pérez", edad: 34 },
            { nombre: "Andrés", apellido: "Gómez", edad: 22 },
            { nombre: "Sofía", apellido: "Martínez", edad: 30 },
            { nombre: "Mateo", apellido: "Herrera", edad: 40 },
            { nombre: "Valentina", apellido: "Díaz", edad: 19 },
            { nombre: "Sebastián", apellido: "Castillo", edad: 26 },
            { nombre: "Isabela", apellido: "Navarro", edad: 33 },
            { nombre: "Tomás", apellido: "Rojas", edad: 31 },
            { nombre: "Daniela", apellido: "Ortega", edad: 24 }
        ]
    )
};

module.exports=usuariosControllers;
