import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Container} from '../../globalStyles'

export const Nav = styled.nav`
display: flex;
justify-content: center ;
align-items: center;
background-color: #0a692a;
top: 0;
z-index:999;
height: 60px;
position: sticky;
font-size: 1.2rem;



`

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: center;
height: 60px;

${Container}


@media screen and (max-width: 1092px){
    display: flex;
    justify-content: center;
}

`;

export const NavLogo = styled(Link)`

display: none;
color: #fff;

@media screen and (max-width: 1092px){
justify-self: center;
text-decoration: none;
cursor: pointer;
font-size: 2rem;
display: flex;
align-items: center;
width: 150px;
margin:0 auto;
}
`
export const NavIcon = styled.div`
display: none;
color: #fff;




@media screen and (max-width: 1092px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer
}
`

export const NavMenu = styled.ul`
display: flex;
justify-content: center;
list-style: none;
text-align: center;


@media screen and (max-width: 1092px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 80vh;
    position: absolute;
    top: 70px;
    left: ${({click})=> (click ? 0 : '-100%')};
    border-radius: 8px;
    opacity: 0.9;
    transition: all 0.5s ease;
    background: #0a692a;
}

`

export const NavItem = styled.li`
height: 60px;
border-bottom: 2px solid transparent;

&:hover {
    transition: all 0.3s ease-in-out;
    color: #D9745B;
}
`



export const NavLink = styled(Link)`
color: #fff;
text-decoration: none;
display: flex;
padding: 0.5 1rem;
align-items: center;
height: 100%;
cursor: pointer;


@media screen and (max-width: 1092px){
text-align : center;
padding: 2rem;
width: 80%;
display: table;


&:hover {
    transition: all 0.3s ease-in-out;
    color: #D9745B;
}

}


&.active {
    color: #D9745B;
}

&:hover {
    transition: all 0.2s ease-in-out;
    color: #D9745B;
}
`




export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 1092px){
    display: none;
}
`

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #256ce1;
padding: 10px 22px;
color: #fff;
border: none;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #D9745B;
}
`;
