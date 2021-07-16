import React from 'react';
import './ToTop.scss'

export default function ToTop({visibility}){
    
    const irArriba=(e)=>{
        window.scrollTo(0, 0)
    }
    return(
        <>
            <button className="toTop" onClick={irArriba}><i className="fas fa-arrow-up"></i></button>
        </>
    )
}