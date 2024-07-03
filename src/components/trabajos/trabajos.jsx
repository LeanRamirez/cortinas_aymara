import React from "react";
import style from "./trabajos.module.css";
import cortina from "../../assets/cortinas/cortina.jpg";
import cortina8 from "../../assets/cortinas/cortina8.jpg"

const Trabajos=()=>{
    return(
        <>
            <div>
                <h3>Trabajos realizados</h3>
                <img className={style.img} src={cortina} alt="cortina" />
                <img className={style.img} src={cortina8} alt="cortina" />
            </div>
        </>
    )
}
export default Trabajos