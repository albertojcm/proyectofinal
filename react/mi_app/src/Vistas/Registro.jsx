import { useState } from "react"
import {Link} from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";




const Registro = () => {

    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    

    const Enviar = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8080/registrados', {usuario,contraseña, email})
        .then(resultado => {
            //console.log(resultado)
            navigate('/login')
        })
        .catch(error => console.log(error))
    }




    return (
        <main className="flex justify-center items-center bg-white-900 text-white w-[100vw] h-[92.60vh]">
            <div className="flex flex-col items-center bg-stone-600 h-[92%] w-[25%]">
                <h1 className="p-14 text-3xl font-bold">Registro</h1>
                
                <div>
                    <p className="mb-2">Usuario</p>
                    <input className="text-black font-thin mb-2 border focus:outline-none focus:border-red-700 placeholder:text-center w-[220px] pl-1" type="text" placeholder="Nombre de Usuario" name={usuario} onChange={(e) => setUsuario(e.target.value)}/>
                </div>
                <div>
                    <p className="mb-2">Email</p>
                    <input className="text-black font-thin mb-2 border focus:outline-none focus:border-red-700 placeholder:text-center w-[220px] pl-1" type="text" placeholder="Email" name={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <p className="mb-2">Contraseña</p>
                    <input className="text-black font-thin border focus:outline-none focus:border-red-700 placeholder:text-center w-[220px] pl-1" type="password" placeholder="Contraseña" name={contraseña} onChange={(e) => setContraseña(e.target.value)}/>
                </div>
                <div className="p-8" >
                    <form onSubmit={Enviar}>
                        <button className="bg-white text-red-700 p-2 hover:bg-red-700 hover:text-white rounded" type="submit">
                            Registrarse
                        </button>
                    </form>
                </div>
                <p className="pb-3">Si ya tiene una cuenta por favor</p>
                <Link to="/login" className="text-red-700 bg-white p-2 hover:bg-red-700 hover:text-white rounded">
                    Inicie Sesion
                </Link>
            </div>
        </main>
    );
}

export default Registro;