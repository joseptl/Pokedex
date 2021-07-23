import React from 'react';
import './Formulario.scss'
import { Dropdown } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


export default function Formulario(props){
    const typeList=["normal","fire","water","grass","electric","ice","fighting","poison","ground","flying","psychic","bug","rock","ghost","dark","dragon","steel","fairy"]
    const handleSubmit = (e)=>{
        e.preventDefault()
    }

    return(
        <div className={`form-container`}>
            <form onSubmit={handleSubmit} action="" className="">
                <input className="input-name" onChange={props.onChange} placeholder="Name" type="text" name="name" value={props.formValues.name}/>
                <div className="form-group">
                <Dropdown className="d-inline mx-2">
                    <Dropdown.Toggle id="dropdown-autoclose-true" className="select">
                        {props.formValues.type1===""?"Type 1":props.formValues.type1[0].toUpperCase() + props.formValues.type1.slice(1)}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item name="type1" onClick={e=>props.onClick(e,"")} className="option" href="#" value="" style={{color:"#ff6a6a"}}>All</Dropdown.Item>
                        {typeList.map(el=><Dropdown.Item name="type1" onClick={e=>props.onClick(e,el)} className="option" style={{color:"#ff6a6a"}} href="#" key={typeList.indexOf(el)} value={el}>{el[0].toUpperCase()+el.slice(1)}</Dropdown.Item>)}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="d-inline mx-2">
                    <Dropdown.Toggle id="dropdown-autoclose-true" className="select">
                        {props.formValues.type2===""?"Type 2":props.formValues.type2[0].toUpperCase() + props.formValues.type2.slice(1)}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item name="type2" onClick={e=>props.onClick(e,"")} className="option" href="#" value="" style={{color:"#ff6a6a"}}>All</Dropdown.Item>
                        {typeList.map(el=><Dropdown.Item name="type2" onClick={e=>props.onClick(e,el)} className="option" style={{color:"#ff6a6a"}} href="#" key={typeList.indexOf(el)} value={el}>{el[0].toUpperCase()+el.slice(1)}</Dropdown.Item>)}
                    </Dropdown.Menu>
                </Dropdown>
                </div>
                <button className="reset" onClick={props.handleClear}><li className="fas fa-trash"></li></button>
            </form>
        </div>
    )
}