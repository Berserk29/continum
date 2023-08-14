import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const NavigationContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    z-index: 100;
    transition: background-color .6s;
    padding: 3.2rem 5vw;
    background-color: ${props => props.color};
    @media ${mediaQuery.styledTablet} {
        padding: 2.4rem 4rem;
    }
    @media ${mediaQuery.styledMobile} {
        padding: 2.1rem 2rem;
    }
`

export const NavLinksContainer = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    gap: 4rem;
`

export const NavLogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
`

export const NavLogo1 = styled.img`
    width: 100%;
    height: 3.35rem;
    @media ${mediaQuery.styledTablet}{
        height: 2.92rem;
    }
`

export const NavLogo2 = styled.img`
    width: 11.83rem;
    height: 100%;
    transition: filter .3s;
    filter: ${props => props.isHover ? 'var(--filter-black)' : 'none' };
    @media ${mediaQuery.styledTablet}{
        width: 10.15rem;
    }
`

export const NavIconsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 15.6rem;
    gap: 3.7rem;
    @media ${mediaQuery.styledMobile} {
        width: auto;
        gap: 2.2rem;
    }
`

export const NavIcon = styled.img`
    width: 2.4rem;
    cursor: pointer;
    transition: filter .3s;
    filter: ${props => props.isHover ? 'var(--filter-black)' : 'none' };
    @media ${mediaQuery.styledTablet} {
        width: 2.2rem;
    }
    @media ${mediaQuery.styledMobile} {
        width: 2rem;
    }
`