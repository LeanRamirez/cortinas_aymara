import React from "react";
import style from "./trabajos.module.css";
import cortina from "../../assets/cortinas/cortina.jpg";
import cortina8 from "../../assets/cortinas/cortina8.jpg"
import cortina11 from "../../assets/cortinas/cortina11.jpg"
import cortina12 from "../../assets/cortinas/cortina12.jpg"

const Trabajos=()=>{
    return(
        <>
            <div>
                <h3>Trabajos realizados</h3>
                <img className={style.img} src={cortina} alt="cortina" />
                <img className={style.img} src={cortina8} alt="cortina8" />
                <img className={style.img} src={cortina11} alt="cortina11" />
                <img className={style.img} src={cortina12} alt="cortina12" />
            </div>
        </>
    )
}
export default Trabajos