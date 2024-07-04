import React from "react";
import style from "./accesorios.module.css";
import accesorios1 from "../../assets/accesorios/accesorios1.jpg";
import accesorios2 from "../../assets/accesorios/accesorios2.jpg";
import angulos from "../../assets/accesorios/angulos.jpg";
import banderetas from "../../assets/accesorios/banderetas.jpg";
import bobinas from "../../assets/accesorios/bobinas.jpg";
import guias from "../../assets/accesorios/guias.jpg";
import puertas from "../../assets/accesorios/puertas.jpg";
import tablillaciega from "../../assets/accesorios/tablillaciega.jpg";
import tablillamicro from "../../assets/accesorios/tablillamicro.jpg";
import tablillanervios from "../../assets/accesorios/tablillanervios.jpg";
import tubos from "../../assets/accesorios/tubos.jpg";

const Accesorios =()=>{
    return(
        <>
            <div>
                <h3>Accesorios</h3>
                <img className={style.img} src={accesorios1} alt="accesorios1" />
                <img className={style.img} src={accesorios2} alt="accesorios2" />
                <img className={style.img} src={angulos} alt="angulos" />
                <img className={style.img} src={banderetas} alt="banderetas" />
                {/* <img className={style.img} src={bobinas} alt="bobinas" />
                <img className={style.img} src={guias} alt="guias" />
                <img className={style.img} src={puertas} alt="puertas" />
                <img className={style.img} src={tablillaciega} alt="tablilla ciega" />
                <img className={style.img} src={tablillamicro} alt="tablilla micro" />
                <img className={style.img} src={tablillanervios} alt="tablilla nervios" />
                <img className={style.img} src={tubos} alt="tubos" /> */}
            </div>
        </>
    )
}
export default Accesorios;