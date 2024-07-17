import React from "react";
import NavBar from "./components/navBar/navBar";
import Services from "./components/services/services";
import Inicio from "./components/inicio/inicio";
import Form from "./components/form/form";
import style from "./App.module.css"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const App=()=>{
    return(
        <div>
            <Inicio/>
            <NavBar/>
            <Services/>
            <Form/>
        </div>
    )
}
export default App;

        
        