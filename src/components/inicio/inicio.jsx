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
        <div className={style.containerText}>
            <h1>Nosotros</h1>
            <span className={style.text}>
            Somos una empresa familiar que se fundo en 2007. Estamos equipados con maquinas conformadoras para la fabricacion de tablillas y demas elementos que componen una cortina metalica. 
            Contamos con la maquinaria para la fabricacion de todos los elementos necesarios para una cortina metalica: tablillas, ligazos, guias, puertas de escape, y todos los accesorios necesarios para el armado de la cortina.
            El proceso de fabricacion y montaje es metodico y organizado, lo que agiliza los tiempos de entrega. Contamos con el mejor personal tecnico, ampliamente capacitado y experimentado para la atencion, montaje y reparaciones de cortinas. 
              Estamos preparados para la atencion al gremio proporcionando el material de mas alto nivel. Realizamos trabajos de mantenimiento en horarios especiales de acuerdo con las exigencias de las grandes empresas que contratan nuestros servicios.  
                </span>
            </div>
        </>
    )
}
export default Inicio;





