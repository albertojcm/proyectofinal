import { NavLink } from "react-router-dom";
import {Link} from "react-router-dom";
import logo from '../imagenes/Marvel_Logo.svg.png'


const Menu = () => {

    let ColorSpan = ({isActive}) =>({
        color: isActive
        ? "rgb(185,28,28)"
        : "rgb(255,255,255)",

        fontWeight: isActive
            ? "600" 
            : "400",

    })

    return (
        <nav className=" flex bg-stone-600 justify-between p-3">
            <Link to="/">
                <img className="h-[24px]" src={logo} alt="" />
            </Link>
            <div className=" flex gap-x-8 gap-y-4 ">
                <span className="">
                    <NavLink to="/" style={ColorSpan}>Inicio</NavLink>
                </span>

                <span>
                    <NavLink to="/Comics" style={ColorSpan}>Comics</NavLink>
                </span>

                <span>
                    <NavLink to="/Registro" style={ColorSpan}>Registro</NavLink>
                </span>
            </div>
        </nav>
    );
}

export default Menu;