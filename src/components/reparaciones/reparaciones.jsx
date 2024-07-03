import React from "react";
import style from "./reparaciones.module.css"
import img from "../../assets/reparaciones/reparacion.jpg"
import img1 from "../../assets/reparaciones/reparacion1.jpg"
import img2 from "../../assets/reparaciones/reparacion2.jpg"
import img3 from "../../assets/reparaciones/reparacion3.jpg"
import img4 from "../../assets/reparaciones/reparacion4.jpg"

const Reparaciones =()=>{
    return(
        <>
            <div>
                <h3>Reparaciones</h3>
                <img className={style.img} src={img} alt="reparacion" />
                <img className={style.img} src={img2} alt="reparacion2" />
                <img className={style.img} src={img1} alt="reparacion1" />
                {/* <img className={style.img} src={img3} alt="reparacion3" /> */}
                <img className={style.img} src={img4} alt="reparacion4" />
            </div>
        </>
    )
}
export default Reparaciones;