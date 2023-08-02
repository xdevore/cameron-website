import "../NavBar.css";
import React, { useState, useEffect, useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';

function NavBar(){

  const [activeItem, setActiveItem] = useState(null);

  const handleClick = event => {
    setActiveItem(current => !current);
  };
  
    return (
        <div>
          <Navbar>
            <Navbar.Collapse class-name='navbar-collapse' id="responsive-navbar-nav">
              <Nav class-name='navbar-nav' defaultActiveKey="#home">

                <Nav.Item class-name="nav-item">
                  <Nav.Link as={Link} to="/credits" >
                    credits
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item class-name="nav-item">
                  <Nav.Link as={Link} to="/beats">
                    beats
                  </Nav.Link>
                </Nav.Item>

              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
    );
  }
  
export default NavBar;