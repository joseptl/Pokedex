import React from 'react';
import './NotFound.scss'
import error from './pokeballError.png'

export default function NotFound(){
    return(
        <div className="NotFound">
            <img src={error} alt="" />
            <div>
            <h4>Error 404</h4>
            <span>Sorry, the page not found</span>
            </div>
        </div>
    )
}