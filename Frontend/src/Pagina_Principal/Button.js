import React from "react"
import {Link} from 'react-router-dom'

function Button (){

  return(
<>


<div className="franja">
<button type="button" class="btn btn btn-outline-success btn-1"><Link to="/Cultura">Cultura</Link></button>
<button type="button" class="btn btn btn-outline-success btn-2"><Link to="/hospedaje">Alimentacion y Hospedaje</Link></button>
<button type="button" class="btn btn btn-outline-success btn-3"><Link to="/recreacion">Recreación</Link></button>
  </div>
 
  </>
  );

 }

 export default Button
