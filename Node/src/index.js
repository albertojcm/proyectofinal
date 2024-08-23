const express = require('express');

const cors = require('cors');

const mongoose = require('mongoose');

const app = express();

//Cors
app.use(cors())

//Express
app.use(express.json());


//base de datos
const basedeDatos = 'mongodb://127.0.0.1:27017/Proyecto-Final'


//Coneccion con la base de datos

async function conectarDatos(){
    await mongoose.connect(basedeDatos)
    console.log(`conectado a la base de datos Proyecto-Final`)
}
conectarDatos()

//Esquemas

const ComicsSchema = new mongoose.Schema({
    titulo: String,
    descripcion: String,
    precio: Number
})

const RegistradosSchema = new mongoose.Schema({
    usuario: String, 
    contraseña: String,
    email: String
})


//modelo de comics
const comics = mongoose.model('comics', ComicsSchema)
const Registrados = mongoose.model('registrados', RegistradosSchema)



//Rutas


//Ruta Raiz
app.get('/', (req, res) =>{
    res.send("Hola, esta es mi api de ComicsMARVEL")
})


// Registro

app.post('/registrados', (req, res) => {
    Registrados.create(req.body)
    .then(registrados => {
        res.json(registrados)
    })
    .catch(error => {
        res.json(error)
    })
})


// Login

app.post('/login', (req, res) =>{
    const {email, contraseña} = req.body
    Registrados.findOne({email: email})
    .then(usuario => {
        if(usuario){
            if(usuario.contraseña === contraseña){
                res.json("Confirmado")
            }else{
                res.json("Contraseña incorrecta")
            }
        }else{
            res.json("No existe el usuario")
        }
    })
    .catch(error => {
        res.json(error)
    })
    
})


app.get('/login/res', (res, req) =>{
    const {usuario} = req.body
    res.json(usuario)
})


// Cerrar Sesion




// Admin


//Ruta de datos de la Api (Comics)

app.get('/comics', async (req, res) =>{
    
    try{
        const comicsRegistrados = await comics.find()
        res.json(comicsRegistrados)
    }catch(error){
        res.status(500).json({error: "Error" + error.menssage})
    }
})

// Ruta comics por ID

app.get('/comics/id/:id', async (req, res) =>{
    
    try{
        const comicsId = await comics.findOne({_id: {$eq: req.params.id}})

        if(comicsId != null){
            res.json(comicsId)
        }else{
            res.status(404).json({error: "No se encontro lo que busca"})
        }
    }catch(error){
        res.status(500).json({error: "ocurrio un error" + error})
        console.log("ocurrio un error" + error);
    }
})



// Ruta POST

app.post('/comics', async(req, res) =>{
    const {titulo, descripcion, precio} = req.body;

    try{
        const comicsAgg = new comics( {titulo, descripcion, precio} )
        await comicsAgg.save()
        res.send("El comics se agrego correctamente")
    }catch(error){
        res.status(500).json({error: "ocurrio un error" + error})
        console.log("ocurrio un error" + error);
    }
})



// Ruta patch

app.patch('/comics/id/:id', async(req, res) =>{
    const {ID} = req.params;
    const {titulo, descripcion, precio} = req.body;

    try{
        const patComics = await comics.findByIdAndUpdate({_id: ID}, {titulo, descripcion, precio})
        res.send("se actualizaron los datos correctamente")
    }catch(error){
        res.status(500).json({error: "ocurrio un error" + error})
        console.log("ocurrio un error" + error);
    }
})



// Ruta delete

app.delete('/comics/id/delete/:id', async (req, res) =>{
    const {_id} = req.params;
    const {titulo, descripcion, precio} = req.body;

    try{
        const deleComics = await comics.deleteOne({_id: _id}, {titulo, descripcion, precio}) 
        res.send("Se elimino el comics correctamente")
    }catch(error){
        res.status(500).json({error: "ocurrio un error" + error})
        console.log("ocurrio un error" + error);
}
})


















//puerto 8080
app.listen(8080,()=>{
    console.log("el servidor se esta escuchando en el puerto 8080")
})