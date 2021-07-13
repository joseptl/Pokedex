import React,{useState,useEffect} from 'react';
import PokemonV2 from './PokemonV2';
import Missing from './Missing';
import Formulario from './Formulario';
import DetallePkmn from './DetallePkmn';
import Loading from './Loading'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './ListaPokemon.scss'

export default function ListaPokemonsV2({url}){
    const [data,setData]=useState([]);
    const [pokemons,setPokemons]=useState([])
    const [pokemonSelected, setPokemonSelected]=useState(null);
    const [show, setShow] = useState(false);
    const[formValues, setFormValues]=useState({
        name:'',
        type1:'',
        type2:''

    })

    const handleClose = () =>{ 
        setShow(false);
        setPokemonSelected(null)}
    const handleShow = (e) => {
        setPokemonSelected(e);
        setShow(true)
    };


    const handleChange=(e)=>{
        setFormValues({...formValues, [e.target.name]:e.target.value})
    }

    useEffect(e=>{
        setFormValues({
            name:'',
            type1:'',
            type2:''
    
        })
    },[url])

    useEffect(e=>{
        setData([])
        setPokemons([])
        const fetchData=async (url)=>{
            const controller = new AbortController();
            const response=await fetch(url,{signal:controller.signal});
            const data=await response.json()
            setData([...data.results])
            setPokemons([...data.results])
            return controller.abort()
        }
        fetchData(url)
    },[url])
    
    /*useEffect(e=>{
        setData(pokemons.filter(pokemon=>{
            return pokemon.name.includes(formValues.name)&&pokemon.type1.includes(formValues.type1)&&pokemon.type2.includes(formValues.type2)
            
        }))
    },[formValues])*/
    return(
        <div>
            {(pokemonSelected!==null&&show===true)&&<DetallePkmn show={show} handleClose={handleClose} e={pokemonSelected}/>}
            <div>
                {pokemons.length>0&&<Formulario
                onChange={handleChange} 
                formValues={formValues}/>}
            </div>
            <div className="row row-cols-8 ListaPokemon">
                {pokemons.length===0&&<Loading/>}
                {(data.length>0)&&data.sort(function(a, b) {
                    return a.id-b.id;
                }).map((e,index)=><PokemonV2 key={index} url={e.url} handleShow={handleShow}/>)}
            </div>
        </div>
    )
}