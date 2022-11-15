import "./NavBar.css"
import React, { useState } from 'react';
import {Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar = (args) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
 

    return (
      <div className= "nav">
        <Navbar dark> 
        
          <NavbarToggler onClick={toggleNavbar} className="me-2" />
          <NavbarText className="navtext"><h4>What's For Dinner ?</h4></NavbarText>

          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
            <NavItem>
                <NavLink href="/recipes">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/liked">MyLikes</NavLink>
                </NavItem>
              <NavItem>
                <NavLink href="" onClick={() => {localStorage.removeItem("recipe_user")}}>Logout</NavLink>
              </NavItem>         
            </Nav>
          </Collapse>
          
        </Navbar>
      </div>
      
    
    );
  }

        
