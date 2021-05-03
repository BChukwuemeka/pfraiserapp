import React, {useState} from 'react';
import { Nav, NavLogo, NavIcon, NavbarContainer, NavMenu, NavItem, NavLink } from './NavbarElements';
import Logo from '../images/Logo.png';
import {FaTimes, FaBars} from 'react-icons/fa';




const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    


    return (
        <>
           <Nav>
               <NavbarContainer>
               <NavLogo to="/" >
                    <img style={{width:"250px", maxHeight:"180px"}} src={Logo} alt="logo"/>
                </NavLogo>
               
                <NavIcon onClick = {handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </NavIcon>
                <NavMenu onClick= {handleClick} click={click}>
                    <NavItem>
                    <NavLink to="/Create" >
                            Create Campaign
                        </NavLink>
                    </NavItem>

                   
                    <NavItem>
                        <NavLink to="/Fund" >
                            Fund Someone
                        </NavLink>
                     </NavItem>

                    <NavItem>
                        <NavLink to="/About" >
                            About Us
                        </NavLink>
                     </NavItem>

                    <NavItem>
                        <NavLink to="/How" >
                            How It Works
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink to="/Categories" >
                            Categories
                        </NavLink>
                    </NavItem>

                </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
       
    );
};

export default Navbar;