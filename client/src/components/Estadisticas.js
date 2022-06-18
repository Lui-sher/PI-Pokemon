import React from "react";
import s from "./Estadisticas.module.css"

export default function Estadisticas (prop) {

    const estilo = {
        cuadrante1: {
            width: "0px",
            height: "0px",
            backgroundColor: "#ff000000", 
            borderRight: "solid", 
            borderRightWidth: `${prop.attack/5}px`,
            borderRightColor: "red",
            borderTop: "solid",
            borderTopWidth: `${prop.defense/5}px`,
            borderTopColor: "#ff000000",
            // diplay: flex,
        },
        cuadrante2: {
            width: "0px",
            height: "0px",
            backgroundColor: "#ff000000", 
            borderLeft: "solid", 
            borderLeftWidth: `${prop.hp/5}px`,  
            borderLeftColor: "#ff000080",
            borderTop: "solid",
            borderTopWidth: `${prop.defense/5}px`,
            borderTopColor: "#ff000000",
        },
        cuadrante3: {
            width: "0px",
            height: "0px",
            backgroundColor: "#ff000000", 
            borderRight: "solid", 
            borderRightWidth: `${prop.attack/5}px`, 
            borderRightColor: "#ff000080",
            borderBottom: "solid",
            borderBottomWidth: `${prop.speed/5}px`,
            borderBottomColor: "#ff000000",
            // diplay: flex,
        },
        cuadrante4: {
            width: "0px",
            height: "0px",
            backgroundColor: "#ff000000", 
            borderLeft: "solid", 
            borderLeftWidth: `${prop.hp/5}px`,  
            borderLeftColor: "red",
            borderBottom: "solid",
            borderBottomWidth: `${prop.speed/5}px`,
            borderBottomColor: "#ff000000",
        },
    }


    return(
        <div className={s.estadisticas}>
            <h4>Estadisticas</h4>
            <br/>
            <div>
                <div className={s.up}>
                    <div className={s.cuadrante1}>
                        <div  style={estilo.cuadrante1}></div>
                    </div>
                    <div className={s.cuadrante2}>
                        <div style={estilo.cuadrante2}></div>
                    </div>
                </div>
                <div className={s.down}>
                    <div className={s.cuadrante3}>
                        <div  style={estilo.cuadrante3}></div>
                    </div>
                    <div className={s.cuadrante4}>
                        <div style={estilo.cuadrante4}></div>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    )
}