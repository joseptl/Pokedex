import React,{useState,useEffect} from 'react';
import ListaPokemonsV2 from './ListaPokemonV2.jsx';
import './Buscador.scss'

export default function Buscador({generation}){
    const[url,setUrl]=useState("");
    

    useEffect(e=>{
        if(generation.length>0){
        setUrl(`https://pokeapi.co/api/v2/pokemon?${generation}`)}
    },[generation])


    return(
        <div className="buscador container-fluid">
            {(url.length>0)&&<ListaPokemonsV2 url={url}/>}
        </div>
    )
}

Buscador.defaultProps={
    generation:"limit=151&offset=0"
}