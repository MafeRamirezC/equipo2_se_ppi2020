import React from "react";
import {Link} from 'react-router-dom';

function Content (props) {

  return(
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
  <h5 class="my-0 mr-md-auto font-weight-normal">EXPLORE.se</h5>
  <nav class="my-2 my-md-0 mr-md-3">
    <Link class="p-2 text-dark" href="#">Inicio</Link>
    <Link class="p-2 text-dark" to="/registro">Registro</Link>
    <Link class="p-2 text-dark" to="/login">Iniciar sesóin</Link>
    
  </nav>
  
</div>
  );
}

export default Content