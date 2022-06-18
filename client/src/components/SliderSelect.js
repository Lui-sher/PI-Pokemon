import React, { useEffect, useState } from "react";
import s from "./SliderSelect.module.css";



export default function SlicerSelect ({name, iniciales = "", valorMax, handleChange}) {

    const [valor, setValor] = useState(1)

    useEffect(()=>{
        handleChange({valor: valor, name: name})
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[valor])


    function rangeSlide(value) {
        setValor(value);
    }

    return (
        <div className={s.slidecontainer}>
            <h4> {`${name}: ${valor} ${iniciales}`} </h4>
            <input 
                type="range"
                value={valor} 
                min="1" 
                max={valorMax} 
                onChange={e => rangeSlide( e.target.value)}
                onMouseMove={e => rangeSlide( e.target.value)}
            />
        
        </div>

    )

}