import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Pagina_principal_madre from "../Pagina_Principal/Pagina_principal_madre";
import Cultura from "../Pagina_cultura/Cultura";
import Hospedaje from "../Pagina_hosp_aliment/Hospedaje";
import Recreacion from "../Pagina_recreacion/Recreacion";
import Registro from "../Pagina_registro/Registro";
import Login from "../Paguina_iniciar_sesion/Login";
import Perfil from "../Pagina_perfil_registro/Perfil";
import Informacion from "../Informacion_perfil/Informacion";
import Fincas from "../Cultura/Fincas";
import Parque from "../Parque/Park";
import Desfile from "../Desfile_silleteros/Desfile";
import Adrenalina from "../Pagina_recreacion/Recreacion";
import Deportes from "../Pagina_recreacion/Recreacion";
import Compartir from "../Pagina_recreacion/Recreacion";
import Park from "../Parque/Park";
import Hotel from "../Hotel/Hotel";
import Restaurante from "../Restaurante/Restaurante"

import Camping from "../Camping/Camping";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Pagina_principal_madre} />
          <Route exact path="/cultura" component={Cultura} />
          <Route exact path="/hospedaje" component={Hospedaje} />
          <Route exact path="/recreacion" component={Recreacion} />
          <Route exact path="/registro" component={Registro} />
          <Route exact path="/perfil" component={Perfil} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/info" component={Informacion} />
          <Route exact path="/cul" component={Pagina_principal_madre} />
          <Route exact path="/hosp" component={Pagina_principal_madre} />
          <Route exact path="/recre" component={Pagina_principal_madre} />
          <Route exact path="/reg" component={Registro} />
          <Route exact path="/regist" component={Pagina_principal_madre} />
          <Route exact path="/log" component={Pagina_principal_madre} />
          <Route exact path="/per" component={Informacion} />
          <Route exact path="/inf" component={Pagina_principal_madre} />
          <Route exact path="/cultu" component={Fincas} />
          <Route exact path="/fincas" component={Cultura} />
          <Route exact path="/parque" component={Park} />
          <Route exact path="/par" component={Cultura} />
          <Route exact path="/desfile" component={Desfile} />
          <Route exact path="/des" component={Cultura} />
          <Route exact path="/hotel" component={Hotel} />
          <Route exact path="/hoteles" component={Hospedaje} />
          <Route exact path="/restaurant" component={Restaurante} />
          <Route exact path="/restauran" component={Hospedaje} />
          <Route exact path="/campi" component={Camping} />
          <Route exact path="/camp" component={Hospedaje} />


        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
