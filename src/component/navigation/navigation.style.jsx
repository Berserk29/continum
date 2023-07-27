import { NavLink } from "react-router-dom";
import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const NavLinks = styled(NavLink)`
    color: ${props => props.color};
    font-weight: 600;
    font-size: 1.5rem;
    text-decoration: none;
    transition: color .25s;
    text-transform: capitalize;
`

export const NavigationContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8.4rem;
    width: 100%;
    z-index: 100;
    transition: background-color .25s;
    padding: 0 4rem;
    background-color: ${props => props.color};

    &:hover ${NavLinks}{
        color: var(--color-black);
    }
    @media ${mediaQuery.styledMobile} {
        padding: 0 2rem;
        height: 7rem;
    }
`

export const NavLi = styled.li`
    &:hover ${NavLinks} {
        color: var(--color-primary);
    }
`

export const NavLinksContainer = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    gap: 4.8rem;
`

export const NavLogo = styled.img`
    width: 13.75rem;
    cursor: pointer;
`

export const NavIconsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const NavHam = styled.img`
    width: 3.6rem;
    cursor: pointer; 
`