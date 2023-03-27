import styled from "styled-components";

export const PrContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 2rem 3rem 2rem;
    gap: 2rem
`

export const MaxHeight = styled.div`
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: max-content 40rem max-content max-content;
`

export const ButtonContainer = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
`

export const CirclePage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: var(--color-primary);
    color: var(--color-white);
    font-size: 1rem;
`

export const ArrowIcon = styled.img`
    width: 2rem;
    height: 2rem;
    transition: filter .3s;

    &:hover{
        filter: var(--filter-primary) ;
    }
`

export const ArrowHiddenIcon = styled.img`
    width: 2rem;
    height: 2rem;
    opacity: 0;
`