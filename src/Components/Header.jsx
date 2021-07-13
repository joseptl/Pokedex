import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar, Dropdown, NavDropdown, Nav } from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import './Header.scss'

export default function Header({handleClick}){
    const generationList=[
        {generacion:"I",
        link:"limit=151&offset=0"},
        {generacion:"II",
        link:"limit=100&offset=151"},
        {generacion:"III",
        link:"limit=135&offset=251"},
        {generacion:"IV",
        link:"limit=107&offset=386"},
        {generacion:"V",
        link:"limit=156&offset=493"},
        {generacion:"VI",
        link:"limit=72&offset=649"},
        {generacion:"VII",
        link:"limit=88&offset=721"},
        {generacion:"VIII",
        link:"limit=83&offset=809"}
    ]

    return(
        <Navbar sticky="top" className="navbar" style={{background:"#ff6a6a"}} variant="dark">
            <Navbar.Brand className="titulo">Pokedex</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Nav className="ml-auto nav">
                    <NavDropdown  title="Generations" id="basic-nav-dropdown">
                        {generationList.map((e, index)=>{
                            return <NavDropdown.Item to={`/Gen-${e.generacion}`} key={index} eventKey={e.link} onClick={handleClick}><NavLink className="dropdown-item item" role="button" to={`/Gen-${e.generacion}`}>{e.generacion} Gen</NavLink></NavDropdown.Item>
            
                        })}
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}