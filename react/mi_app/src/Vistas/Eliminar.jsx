import { Link } from "react-router-dom";

const Eliminar = () => {
    
    
    return (
        <div>
            <main className="flex justify-center items-center bg-gradient-to-r from-stone-900 to-stone-600 w-[100vw] h-[92.6vh] flex-col ">
            <div className="flex flex-col justify-center items-center text-white bg-stone-600 w-[40%] h-[50%]">
                <h1 className="font-bold mb-5 text-2xl">Eliminar <span className="text-red-700">Comics</span></h1>

                    <p className="mb-3">ID</p>
                    <input className="placeholder:pl-2 border focus:outline-none focus:border-red-700 mb-2focus:border-red-700 text-black pl-1" type="text" placeholder="ID"/>
                
                <div className="pt-5">
                    <button className="text-red-700 bg-white p-2 hover:bg-red-700 hover:text-white">
                        Eliminar
                    </button>
                </div>
            </div>

            <div className="flex pt-5">
                <Link to="/Administrador">
                    <button className="text-red-700 bg-white p-2 hover:bg-red-700 hover:text-white">
                        Volver
                    </button>
                </Link>
            </div>
        </main>
        </div>
    );
}

export default Eliminar;