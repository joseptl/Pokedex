import React,{useState,useEffect} from 'react';
import { Button } from 'react-bootstrap';
import './Formulario.scss'


export default function Formulario(props){
    const [active, setActive]=useState(false)
    const typeList=["normal","fire","water","grass","electric","ice","fighting","poison","ground","flying","psychic","bug","rock","ghost","dark","dragon","steel","fairy"]
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    const handleClick=()=>setActive(!active)

    return(
        <div className="form">
            <Button className="form-button" onClick={handleClick}><i className="fas fa-search"></i></Button>
            <form onSubmit={handleSubmit} action="" className="">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input onChange={props.onChange} type="text" name="name" value={props.formValues.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="type1">Type 1</label>
                    <select onChange={props.onChange} name="type1" id="type1" value={props.formValues.type1}>
                        <option value="">all</option>
                        {typeList.map((el)=>{
                        return <option key={typeList.indexOf(el)} value={el}>{el}</option>})}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="type2">Type 2</label>
                    <select onChange={props.onChange} name="type2" id="type2" value={props.formValues.type2}>
                        <option value="">all</option>
                        {typeList.map((el)=>{
                        return <option key={typeList.indexOf(el)} value={el}>{el}</option>})}
                    </select>
                </div>
            </form>
        </div>
    )
}