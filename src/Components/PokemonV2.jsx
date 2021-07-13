import React,{useState,useEffect} from 'react';
import { findAllInRenderedTree } from 'react-dom/test-utils';
import logo from './pokeball.png';
import './Pokemon.scss';

export default function PokemonV2({url, handleShow}){

    const[pokemon,setPokemons]=useState({})
    const [ready,setReady]=useState(false)

    const handleClick=(pokemon)=>{
        handleShow(pokemon)
    }
    
    useEffect(e=>{
        const fetchData=async(url)=>{
            const controller = new AbortController();
            const response = await fetch(url,{signal:controller.signal});
            const data = await response.json();
            const respSpecies = await fetch(data.species.url);
            const specie = await respSpecies.json();
            let pokemon = {
                id:data.id ,
                name:data.name,
                genera:specie.genera[7].genus,
                avatar:data.sprites.front_default,
                artwork:data.sprites.other["official-artwork"].front_default,
                weight:data.weight/10,
                height:data.height/10,
                type1:data.types[0].type.name,
                type2:data.types[1]?data.types[1].type.name:"",
                description:specie.flavor_text_entries.filter(e=>e.language.name==="en")[0].flavor_text,
            }
            setPokemons({...pokemon})
            setReady(true)
            return controller.abort()
        }
        fetchData(url)

    },[url])
        

    return(
        <>
        {ready?<div className={`col-3 Pokemon col-center ${pokemon.type1}`} id={pokemon.id} onClick={e=>handleClick(pokemon)}>
            <img className="pokeball" src={logo} alt="background" />
            <figure>
                <img src={pokemon.avatar} alt={pokemon.name} />
            </figure>
            <h4>#{pokemon.id}</h4>
        </div>
        :<div className={`col-3 Pokemon col-cent pkmnLoad`}></div>}
        </>
    )
}