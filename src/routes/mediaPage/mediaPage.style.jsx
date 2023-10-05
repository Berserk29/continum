import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const PrContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16rem 4rem 20rem 4rem;
    gap: 8rem;
    @media ${mediaQuery.styledTablet}{
        padding: 8rem 2rem 16rem 2rem;
    }
    @media ${mediaQuery.styledMobile}{
        padding: 6.4rem 2rem 12rem 2rem;
        gap: 6rem;
    }
`

export const FlexCenter = styled.div`
    display: flex;
    justify-content: center;
`

export const GridContainer = styled.div`
    display: grid;
    justify-content: center;
    flex: 1440px 0 1;
    grid-template-columns: 8rem 1fr max-content max-content;
    @media ${mediaQuery.styledTablet} {
        grid-template-columns: 8rem 1fr max-content max-content;
    }
    @media ${mediaQuery.styledMobile} {
        grid-template-columns: max-content 1fr max-content;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: ${props => props.gap || 1.5}rem;
    align-self: center;
`

export const CirclePage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => props.size || 2.8}rem;
    height: ${props => props.size || 2.8}rem;
    cursor: ${props => props.cursor || 'default'};
    border-radius: 50%;
    background-color: var(--color-secondary);
    color: var(--color-050);
    font-family: 'Noto Sans';
    font-weight: 700;
    font-size: 1.4rem;
`

export const NumberPage = styled(CirclePage)`
    background-color: transparent;
    color: var(--color-400);
    cursor: pointer;
    transition: background-color .2s;
    :hover {
        background-color: var(--color-200);
    }
`

export const ArrowIcon = styled.img`
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
    transition: filter .3s;
    filter: var(--filter-400);
    margin-left: ${props => props.marginleft || 0}rem;
    margin-right: ${props => props.marginright || 0}rem;
    :hover{
        filter: var(--filter-black) ;
    }
`

export const PlusIcon = styled.img`
    width: 1.5rem;
    height: 1.5rem;
`

export const MaxHeight = styled.div`
    width: 100%;
    height: ${props => props.height}px;
    @media ${mediaQuery.styledTablet} {
        height: auto;
    }
`