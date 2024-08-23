import {Link} from "react-router-dom";

const Agregar = () => {





    return (
        <main className="flex justify-center items-center bg-gradient-to-r from-stone-900 to-stone-600 w-[100vw] h-[92.6vh] flex-col ">
            <div className="flex flex-col items-center text-white bg-stone-600 w-[40%] h-[62%]">
                <h1 className="font-bold p-5 text-2xl">Agregar <span className="text-red-700">Comics</span></h1>
                
                <div>
                    <p className="mb-2" >Titulo</p>
                    <input className="placeholder:pl-2 border focus:outline-none focus:border-red-700 mb-2 text-black pl-1" type="text" placeholder="Titulo"/>
                </div>

                <div>
                    <p className="mb-2" >Descripcion</p>
                    <input className="placeholder:pl-2 border focus:outline-none focus:border-red-700 mb-2 text-black pl-1" type="text" placeholder="Descripcion"/>
                </div>

                <div>
                    <p className="mb-2" >Precio</p>
                    <input className="placeholder:pl-2 border focus:outline-none focus:border-red-700 mb-2 text-black pl-1" type="text" placeholder="Precio"/>
                </div>
                
                <div className="pt-5">
                    <button className="text-red-700 bg-white p-2 hover:bg-red-700 hover:text-white rounded">
                        Agregar
                    </button>
                </div>
            </div>

            <div className="flex pt-5">
                <Link to="/Administrador">
                    <button className="text-red-700 bg-white p-2 hover:bg-red-700 hover:text-white rounded">
                        Volver
                    </button>
                </Link>
            </div>
        </main>
    );
}

export default Agregar;