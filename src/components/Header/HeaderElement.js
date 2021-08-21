import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const Nav = styled.nav`
    display:flex;
    position:sticky;
    top:0;
    padding:5px 10px;
    background:white;
    z-index:100;
`
export const NavbarContainer = styled.div`
    display:flex;
    justify-content:space-between;
    height:60px;
    align-items:center;
    width:100%;
`

export const NavLogo = styled(LinkR)`
    display:flex;
    margin:0 24px;
    color:black;
    text-decoration:none;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight:bold;
    z-index:2;
`

export const NavMenu = styled.div`
    display:flex;
    justify-content:space-around;

    @media screen and (max-width:768px){
        display:none;
    } 
`

export const NavItem = styled.div`
    display:flex;
    justify-content:space-around;
    padding:0 25px;
`

export const NavLink = styled.div`
    font-size:1.1rem;
    white-space:nowrap;
    color:black;
    z-index:2;
    transition:0.1s all ease-in;

    &:hover{
        cursor:pointer;
        color:gray;
    }
`
export const NavLinkRoute = styled.div`
    font-size:1.1rem;
    white-space:nowrap;
    color:black;
    z-index:2;
    transition:0.1s all ease-in;
    text-decoration:none;

    &:hover{
        cursor:pointer;
        color:gray;
    }
`