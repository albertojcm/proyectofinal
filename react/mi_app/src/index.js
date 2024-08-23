import React from 'react';

import ReactDOM from 'react-dom/client';

import './index.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";

//Componente(Menu)
import Menu from './Componentes/Menu';

//Vistas
import Inicio from './Vistas/Inicio';
import Comics from './Vistas/Comics';
import Registro from './Vistas/Registro';
import Infomacion from './Vistas/Informacion';
import Administrador from './Vistas/Administrador';
import Login from './Vistas/login';
import Agregar from './Vistas/Agregar'
import Actualizar from './Vistas/Actualizar'
import Eliminar from './Vistas/Eliminar'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/Comics" element={<Comics/>}/>
      <Route path="/Registro" element={<Registro/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/Administrador" element={<Administrador/>}/>
      <Route path="/id/:id" element={<Infomacion/>}/>
      <Route path="/Agregar" element={<Agregar/>}/>
      <Route path="/Actualizar" element={<Actualizar/>}/>
      <Route path="/Eliminar" element={<Eliminar/>}/>
    </Routes>
  </BrowserRouter>
);

