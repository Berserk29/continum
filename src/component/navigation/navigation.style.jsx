import { Link } from "react-router-dom";
import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const NavLink = styled(Link)`
    color: ${props => props.color};
    font-weight: 500;
    font-size: 1.1rem;
    text-decoration: none;
    transition: color .25s;
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
    transition: background-color .25s;
    background-color: ${props => props.color};
    /* &:hover{
        background-color: var(--color-white);
    } */
    &:hover ${NavLink}{
        color: var(--color-black);
    }

    @media ${mediaQuery.styledTablet} {
        justify-content: space-between;
        padding: 0 4rem;
    }
    `

export const NavLi = styled.li`
    &:hover ${NavLink} {
        color: var(--color-primary);
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

export const NavHam = styled.img`
    width: 2.5rem;
    cursor: pointer; 
`