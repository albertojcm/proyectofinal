import { useEffect, useState} from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom"


const ApiMarvel = () => {

    const [ comics, setComics ] = useState([]);
    const [ comicsCantidad, setComicsCantidad ] = useState("")
    const [ buscar, setBuscar ] = useState("");
    let navigate = useNavigate();



    useEffect(
        ()=>{
            
            async function ObtenerdatosApi(){
                try{
                    const res = await axios.get("http://localhost:8080/comics")
                    setComicsCantidad(res.data.length)
                    setComics(res.data)
                    //console.log(res.data)
                }catch(error){
                    console.log("Ocurrio un error" + error)
                }
            }
            ObtenerdatosApi()
        },[]
    )
    




const buscador = (e) =>{
    setBuscar(e.target.value)
    console.log(e.target.value)
}

let dataComics = [];


try{
    if(!buscar){
        dataComics = comics;
    }
    else{ 
        dataComics = comics.filter( (filtrado) =>
        filtrado.titulo.toLowerCase().includes(buscar.toLowerCase())
        )
        
    }
}catch(error){
    console.log("error" + error)
}




    return (
        <main>

            <div className="text-center text-black text-4xl p-10">
                <h1 className="bg-red-700 text-white p-5 font-bold">COMICS MARVEL</h1>
            </div>

            <div className="text-center text-black text-2xl p-10">
                <p className="bg-white p-3">Comics disponibles: <span className="text-red-700 font-bold">{comicsCantidad}</span></p>
            </div>

            <div className="text-center text-black p-10">
                <input className="placeholder-red-500 outline-0 rounded border-red-400 w-[50%] h-[40px] text-center font-bold text-red-700" value={buscar} onChange={buscador} type="search" placeholder="Buscar comics"/>
            </div>
            
            <div className="sm:flex flex-col md: grid grid-cols-2 lg:grid grid-cols-3 ">
            {
                dataComics.map(
                    (datos) =>(
                        <div>
                            <div>
                                <div className="flex flex-col justify-center items-center text-center text-white italic m-5">

                                    <img className="cursor-pointer w-[200px] h-[200px]" src={datos.imagen} alt="" key={datos._id} onClick={()=>navigate(`/id/${datos._id}`)}/>
                                    <p>{datos.titulo}</p>
                                    <p>Precio: <span className="text-green-700">${datos.precio}</span>  </p>
                                    
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

export default ApiMarvel;