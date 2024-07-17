import React, { useState } from "react";
import style from "./services.module.css";
import Trabajos from "../trabajos/trabajos";
import Reparaciones from "../reparaciones/reparaciones";
import Accesorios from "../accesorios/accesorios";
import soldadura from "../../assets/soldadura.jpg";

// Definición de los servicios
const services = [
  { name: "Cortinas", component: "trabajos" },
  { name: "Reparaciones", component: "reparaciones" },
  { name: "Accesorios", component: "accesorios" }
];

// Función para manejar el clic en los componentes
const handleComponentClick = (component, setActiveComponent) => {
  setActiveComponent(component);
};

// Función para renderizar el componente correspondiente
const renderComponent = (activeComponent) => {
  switch (activeComponent) {
    case "trabajos":
      return <Trabajos />;
    case "reparaciones":
      return <Reparaciones />;
    case "accesorios":
      return <Accesorios/>; // Placeholder for Accesorios component
    default:
      return 
  }
};

const Services = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <>
        <div className={style.container}>
          <h1>Servicios</h1>
          {/* <img src={soldadura} alt="soldadura" /> */}
          <div className={style.containerList}>
            <ul>
              {services.map((service) => (
                <li key={service.component} className={style.containerItem}>
                  <button onClick={() => handleComponentClick(service.component, setActiveComponent)}>
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      <div>
        {renderComponent(activeComponent)}
      </div>
    </>
  );
};

export default Services;
      




// import React from "react";
// import { useState } from "react";
// import style from "./services.module.css"
// import Trabajos from "../trabajos/trabajos";
// import Reparaciones from "../reparaciones/reparaciones";

// const Services = ()=>{

//     const [] =useState(null)

//     return(
//         <>
//                 <div className={style.container}>
//                     <h1>Servicios</h1>
//                     <div className={style.containerList}>
//                         <ul >
//                             <li className={style.containerItem}>
//                                 <a href={Trabajos}>Cortinas</a></li>
//                             <li className={style.containerItem}>
//                                 <a href={Reparaciones}>Reparaciones</a></li>
//                             <li className={style.containerItem}>
//                                 <a href="">Accesorios</a></li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div>
//                     <Trabajos/>
//                     <Reparaciones/>
//                 </div>
            
//         </>
//     )
// }
// export default Services;
            
