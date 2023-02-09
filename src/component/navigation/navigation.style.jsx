import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(Link)`
    color: var(--color-white);
    font-size: 1.1rem;
    text-decoration: none;
    transition: all .2s;
    padding: 3rem 2rem;
`

export const NavigationContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 6rem;
    width: 100%;
    z-index: 100;
    transition: all .4s;
    background-color: transparent;
    &:hover{
        background-color: var(--color-white);
    }
    &:hover ${NavLink}{
        color: var(--color-black);
    }
    `

export const NavLi = styled.li`
    &:hover ${NavLink} {
        color: var(--color-primary)
    }
`

export const NavLinksContainer = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
`

export const NavLogo = styled.img`
    width: 11rem;
    cursor: pointer;
`

export const NavIconsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const NavGlobe = styled.img`
    width: 1.7rem;
    cursor: pointer;
`

export const NavHam = styled.img`
    width: 1.7rem;
    cursor: pointer; 
`