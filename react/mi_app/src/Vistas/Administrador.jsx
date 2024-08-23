import { useEffect, useState } from "react"
import axios from "axios"
import {Link} from "react-router-dom";


const Administrador = () => {

    const [ datos, setDatos ] = useState([]);
    const [ buscar, setBuscar ] = useState("");
    const [ cantidad, setCantidad ] = useState("");
    
    
    useEffect(
        ()=>{
            async function DatosObtenidos(){ 
                try{
                    const res = await axios.get("http://localhost:8080/comics")
                    console.log(res.data)
                    setCantidad(res.data.length)
                    //setID(res.data.data.results.id)

                    if(res.status === 200){ 
                        setDatos(res.data)
                    }else{
                        console.log("no se encontro la infomacion")
                    }
                }
                catch(err){
                    console.log("error:" + err)
                }
            }
            DatosObtenidos()
        },[]
    )

    const buscador = (e) =>{
        setBuscar(e.target.value)
        //console.log(e.target.value)
    }
    
    let dataComics = [];
    
    
    try{
        if(!buscar){
            dataComics = datos;
        }
        else{ 
            dataComics = datos.filter( (filtrado) =>
            filtrado.titulo.toLowerCase().includes(buscar.toLowerCase())
            )
            
        }
    }catch(error){
        
    }


    // const agregarPost = async () =>{
    //     const post = {titulo: "titulo", descripcion: "descripcion", precio: "precio"};
    //     await axios.post("http://localhost:8080/comics");
    //     setDatos([post,...datos])
    // }

    
    return (
        <main className="flex justify-center bg-stone-900">
            
            <div className="">

                <div className="text-center text-black text-2xl p-10">
                    <p className="bg-white p-3">Comics disponibles: <span className="text-red-700 font-bold">{cantidad}</span></p>
                </div>

                <div className="flex flex-col-3 justify-center text-center text-white p-5 gap-10">
                    <Link to="/Agregar">
                        <button className="text-red-700 bg-white p-2 hover:bg-red-700 hover:text-white rounded">Agregar</button>
                    </Link>

                    <Link to="/Actualizar">
                        <button className="text-red-700 bg-white p-2 hover:bg-red-700 hover:text-white rounded">Actualizar</button>
                    </Link>
                    
                    <Link to="/Eliminar">
                        <button className="text-red-700 bg-white p-2 hover:bg-red-700 hover:text-white rounded">Eliminar</button>
                    </Link>
                </div>

                <div className="text-center text-black p-10">
                    <input className="placeholder-red-500 outline-0 rounded border-red-400 w-[50%] h-[40px] text-center font-bold text-red-700" value={buscar} onChange={buscador} type="search" placeholder="Buscar comics"/>
                </div>
            {
                dataComics.map(
                    (datos) =>(
                        <div>
                            <div className="flex flex-col-3  text-center italic m-8 h-[100%] w-[100%] justify-start">
                                <div className="flex h-[200px] justify-center ">
                                    <img className="cursor-pointer h-[200px] w-[220px]" src={datos.imagen} alt="" />
                                </div>
                                
                                <div className="flex h-[200px] w-[100%] justify-center items-center bg-stone-600 p-5">
                                    <p className="bg-stone-600 text-white font-bold">{datos.titulo}</p>
                                </div>

                                <div className="flex h-[200px] justify-center items-center bg-stone-600 p-5">
                                    <p className="bg-stone-600 text-white  text-white">Precio: <span className="text-green-500 font-bold">${datos.precio}</span>  </p>
                                </div>
                                
                            </div>
                        </div>
                        
                    )
                )
            }
            </div>
        </main>
    )
}

export default Administrador;