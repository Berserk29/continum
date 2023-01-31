import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 6rem;
    width: 100%;
    z-index: 100;
    transition: all .4s;
`

export const NavLogo = styled.img`
    width: 11rem;
    cursor: pointer;
`

export const NavLinksContainer = styled.div`
    display: flex;
    align-items: center;
    list-style: none;
`

export const NavLink = styled(Link)`
    font-size: 1.1rem;
    text-decoration: none;
    transition: all .2s;
    padding: 3rem 2rem;
    &:hover{
        color: var(--color-primary)
    }
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