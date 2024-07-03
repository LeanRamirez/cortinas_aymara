import React from "react";
import style from "./services.module.css"
import Trabajos from "../trabajos/trabajos";

const Services = ()=>{
    return(
        <>
                <div className={style.container}>
                    <h1>Servicios</h1>
                    <div className={style.containerList}>
                        <ul >
                            <li className={style.containerItem}>
                                <a href="">Cortinas</a></li>
                            <li className={style.containerItem}>
                                <a href="">Reparaciones</a></li>
                            <li className={style.containerItem}>
                                <a href="">Accesorios</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <Trabajos/>
                </div>
            
        </>
    )
}
export default Services;
            
