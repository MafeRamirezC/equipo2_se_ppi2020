import React from "react";
import "../../src/styles.css"
import Imagen from "../Paguina_iniciar_sesion/Imagen";
import {Link} from 'react-router-dom';


function Login(){
return(

<form class="form-signin">
<button type="button" class="btn btn-outline-secondary btn-Cul"><Link to="/log">Volver</Link></button>
  <Imagen/>
  <h1 class="h3 mb-3 font-weight-normal">Ingresar tus datos para navegar como comerciante.</h1>
  <label for="inputEmail" class="sr-only">Dirección de cooreo electrónico</label>
  <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus=""/>
  <label for="inputPassword" class="sr-only">Contraseña</label>
  <input type="password" id="inputPassword" class="form-control" placeholder="Password" required=""/>
  <div class="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me"/> Recuérdame
    </label>
  </div>
  <button class="btn btn-outline-secondary btn-block" type="submit"><Link to="/perfil">Iniciar Sesión</Link></button>
  <p class="mt-5 mb-3 text-muted">© 2020-2025</p>
</form>
);
}

export default Login;




 
