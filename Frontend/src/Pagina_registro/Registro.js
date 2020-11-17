import React from "react"
import Imagen from "../Pagina_registro/Imagen"
import {Link} from 'react-router-dom';

function Registro (){

  return(
    <form  class="form-sinig">
   <button type="button" class="btn btn-outline-secondary volverregis"><Link to="/regist">Volver</Link></button>

   
   <div className="franja">
  


 {/* <button type="button" class="btn btn-outline-secondary volverregis"><Link to="/regist">Volver</Link></button> */}
 <Imagen class="Imagen1"/>
  <label  for="inpuNombre" class="sr-only ">Nombre</label>
  <input type="Nombre" id="inputNombre" class="Nom" placeholder="Nombre" required="" autofocus=""/>
  <label for="inputPassword" class="sr-only ">Apellido</label>
  <input type="Apellido" id="inputApellido" class="Apell" placeholder="Apellido" required=""/>
  <label for="inputEmail" class="sr-only">Dirección de cooreo electrónico</label>
  <input type="email" id="inputEmail" class="Correo" placeholder="Email address" required="" autofocus=""/>
  <label for="inputPassword" class="sr-only">Contraseña</label>
  <input type="password" id="inputPassword" class="Contra" placeholder="Password" required=""/>



    
  <select class="Tipoducumento" id="country">

    <option >Tipo de Documento</option>
  <option >Cedula </option><option>Tarjeta de Indentidad</option>
  <option>Pasaporte</option>
  </select>
  
 

   
   <label for="inpuNumeroID"class="sr-only">NumeroID</label>
  <input type="NumeroID" id="inputNumeroID" class="Numeroid" placeholder="Numero de ID" required="" autofocus=""/> 
  
  
 





    
  

  
           
 



  </div >
<div className="franja">
<button type="button" class="btn btn-outline-secondary btn-reg"><Link to="/info">Registrarse</Link></button>
</div>
 </form>
  
  );

  }

  export default Registro


