import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Infomacion = () => {

    const [ datos, setDatos ] = useState([]);
    const {id} = useParams();
    

    const fetch = async()=>{
        const res = await axios.get(`http://localhost:8080/comics/id/${id}`)
        //console.log(res.data)
        setDatos(res.data)
    }
    fetch()

    return (
        <main className="bg-stone-900 flex flex-col w-[100vw] h-[92.60vh]">
            <div className="flex justify-center items-center bg-stone-900 text-white ">
                <img className="w-[500px] h-[500px]" src={datos.imagen} alt="" />
                <div className="flex flex-col m-2 justify-center place-items-center text-justify font-bold text-2xl	bg-stone-400/30  text-white w-[600px] h-[500px]">
                    <p className="pb-7 m-3 text-center"><span className="text-red-600">Titulo</span>: {datos.titulo} </p>
                    <p className="text-sm m-4"><span className="text-red-600">descripcion</span> : {datos.descripcion}</p>
                    <p className=" text-white"><span className="text-red-600">Precio </span>: <span className="text-green-600"> ${datos.precio}</span></p>
                    <p className="pt-4"><span className="text-red-600">ID</span> : {datos._id}</p>
                </div>
            </div>

            <div className="flex pt-5 flex justify-center">
                <Link to="/Comics">
                    <button className="text-red-700 bg-white p-2 hover:bg-red-700 hover:text-white rounded ">
                        Volver
                    </button>
                </Link>
            </div>
        </main>
    );
}
export default Infomacion;