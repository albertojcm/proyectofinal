import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");
    const navigate = useNavigate();

    const Enviar = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8080/login', {email,contraseña})
        
        .then(resultado => {
            console.log(resultado)
            if(resultado.data === "Confirmado"){
                navigate('/Administrador')
            }
        })
        .catch(error => console.log(error))
    }



    return (
        <main className="flex justify-center items-center bg-white-900 text-white w-[100vw] h-[92.60vh]">
            <div className="flex flex-col items-center bg-stone-600 h-[83%] w-[25%]" >
                <h1 className="p-16 text-3xl font-bold">Login</h1>
                    <div>
                        <p className="mb-2">Email</p>
                        <input className="text-black mb-2 border focus:outline-none focus:border-red-700 placeholder:text-center w-[220px] pl-1" type="text" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div>
                        <p className="mb-2">Contraseña</p>
                        <input className="text-black border focus:outline-none focus:border-red-700 placeholder:text-center w-[220px] pl-1" type="password" placeholder="Contraseña" name="contraseña" onChange={(e) => setContraseña(e.target.value)}/>
                    </div>
                
                    <div className="p-8">
                        <form onSubmit={Enviar}>
                            <button className="bg-white text-red-700 p-2 hover:bg-red-700 hover:text-white" type="submit">
                                Iniciar Sesion
                            </button>
                        </form>
                        <p className="text-white">{}</p>
                    </div>
            </div>
        </main>
    );
}

export default Login;
