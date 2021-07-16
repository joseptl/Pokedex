import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import './Header.scss'

export default function Header(){
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
    let history = useHistory();

    function handleClick(e) {
        history.push(`/Gen-${e}`);
      }

    return(
        <Navbar sticky="top" className="navbar" style={{background:"#ff6a6a"}} variant="dark">
            <Navbar.Brand className="titulo">Pokedex</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Nav className="ml-auto nav">
                    <NavDropdown  title="Generations" id="basic-nav-dropdown">
                        {generationList.map((g, index)=>{
                            return <NavDropdown.Item key={index} onClick={(e)=>handleClick(g.generacion)} eventKey={g.link}>{g.generacion} Gen</NavDropdown.Item>
            
                        })}
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}