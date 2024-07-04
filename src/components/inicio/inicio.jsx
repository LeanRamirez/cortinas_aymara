import React from "react";
import style from "./inicio.module.css";
import cortinabg from "../../assets/cortinas/cortinabg.jpg"

const Inicio =()=>{
    return (
        <>
        <div className={style.container}>
            <img className={style.bg} src={cortinabg} alt="cortina background" />
            <div className={style.textOverlay}>
                <h1>Cortinas Metalicas Aymara</h1>
                <span>Fabricamos todos los modelos de cortinas metalicas del mercado. Tablilas galvanizadas ciegas y microperforadas<br/> Contamos con diferentes productos para brindar acorde a sus necesidades<br/> </span>
            </div>
        </div>
        </>
    )
}
export default Inicio;
