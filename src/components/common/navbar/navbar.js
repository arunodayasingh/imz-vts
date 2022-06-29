import { Container } from "@mui/material";
import React from "react";
import { Bars,Nav,NavMenu,NavLink,NavLogo,NavBtn,NavBtnLink } from "./navbarelemets";

const Navbar = () => {
    return (
        <>
        {/* <Container style={{borderBottom:"1px solid black"}}> */}

       
           <Nav>
            <NavLogo to="/">
                Logo
            </NavLogo>
            {/* <Bars /> */}

            <NavMenu>
                <NavLink 
                  to="/" 
                  activeStyle={{ color:'black' }}
                >
                    Home
                </NavLink>
                <NavLink 
                  to="/about" 
                  activeStyle={{ color: 'black' }}
                >
                    About
                </NavLink>
                <NavLink 
                  to="/contact" 
                  activeStyle={{ color: 'black' }}
                >
                    Contact
                </NavLink>
                {/* <NavLink 
                  to="/signin" 
                  activeStyle={{ color: 'black' }}
                >
                    Sign In
                </NavLink> */}
                {/* <NavBtn>
                    <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>                
                </NavBtn> */}
            </NavMenu> 
           </Nav> 
           {/* </Container> */}
        </>
    );
};
export default Navbar;