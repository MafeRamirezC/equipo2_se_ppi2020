import React from "react"
import Primera_imagen from "../Informacion_perfil/Primera_imagen";
import Segunda_imagen from "../Informacion_perfil/Segunda_imagen";
import Tercera_imagen from "../Informacion_perfil/Tercera_imagen";
import {Link} from 'react-router-dom';

function Informacion (){

  return(
   
  <form  class="form-sinig">
 <button type="button" class="btn btn-outline-secondary btn-Cult"><Link to="/reg">Volver</Link></button>

<div className="franja">
  
<Primera_imagen/>
  <label  for="inpuNombre" class="sr-only ">Nombre del negocio</label>
  <input type="Nombre" id="inputNombre" class="Nom" placeholder="Nombre del negocio" required="" autofocus=""/>
  <label for="inputPassword" class="sr-only ">Cedula</label>
  <input type="Apellido" id="inputApellido" class="Apell" placeholder="Cedula" required=""/>
  <label for="inputEmail" class="sr-only">Nombre del responsable</label>
  <input type="email" id="inputEmail" class="Correo" placeholder="Nombre del responsable" required="" autofocus=""/>
  <label for="inputPassword" class="sr-only">Recidencia</label>
  <input type="nombre" id="inputPassword" class="Contra" placeholder="Residencia" required=""/>
   <label for="NumeroID"class="sr-only">Apellidos</label>
  <input type="NumeroID" id="inputNumeroID" class="Nonenpre" placeholder="Apellidos" required="" autofocus=""/> 
  <select class="Tipoducumento" id="country">
<option >Permiso para laborar</option>
<option >Si</option><option>No</option>
</select>
<select class="Tiponegocio" id="country">
<option >Tipo de Negocio</option>
<option >Hoteleria </option><option>Restaurante</option>
<option>Recreacion</option> <option>Otro</option>
 </select>
  
 <Segunda_imagen/>
<Tercera_imagen/>

  </div>

  <div className="franja">
           
 <button type="button" class="btn btn-outline-secondary btn-reg"><Link to="/perfil">Publicar</Link></button>
</div>

  
  
  
  </form>
  );

  }

  export default Informacion;
