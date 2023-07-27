import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const PrContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10.4rem 4rem 10rem 4rem;
    gap: 6rem;
    @media ${mediaQuery.styledTablet}{
        padding: 8rem 1.6rem;
    }
    @media ${mediaQuery.styledMobile}{
        padding: 5rem 2rem;
        gap: 3rem;
    }
`

export const GridContainer = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: 8rem 90rem max-content max-content;
    @media ${mediaQuery.styledTablet} {
        grid-template-columns: 8rem 1fr max-content max-content;
    }
    @media ${mediaQuery.styledMobile} {
        grid-template-columns: max-content 1fr max-content;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    gap: 2rem;
    align-self: center;
`

export const CirclePage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    background-color: var(--color-primary);
    color: var(--color-white);
    font-size: 1.4rem;
`

export const ArrowIcon = styled.img`
    width: 3.2rem;
    height: 3.2rem;
    transition: filter .3s;

    &:hover{
        filter: var(--filter-primary) ;
    }
`

export const ArrowHiddenIcon = styled.img`
    width: 3.2rem;
    height: 3.2rem;
    opacity: 0;
`

export const MaxHeight = styled.div`
    width: 100%;
    /* Some JSX style will be implement */
`