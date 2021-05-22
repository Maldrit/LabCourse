import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

export class Navigation extends Component{

    render(){
        return(
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                <NavLink className="d-inline p-2 bg-blue text-white" to="/">
                    Home
                </NavLink>
                <NavLink className="d-inline p-2 bg-blue text-white" to="/Cinema">
                    Cinema
                </NavLink>
                <NavLink className="d-inline p-2 bg-blue text-white" to="/Movie">
                    Movie
                </NavLink>

                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}