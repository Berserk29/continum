import styled from "styled-components";

export const CarouselContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2.5rem;
    height: 60rem;
    padding-left: 12.5rem;
    background-size: cover;
    background-position: center;
    
`

export const ItemContainer = styled.ul`
    display: flex;
    gap: 1rem;
    justify-content: start;
`

export const CarouselItem = styled.li`
    margin-right: 16px;
    color: var(--color-white);
    
    &:first-child{
        list-style: none;
    }
`

export const CarouselBtn = styled.a`
    color: var(--color-grey-light);
    transition: all .2s;
    cursor: pointer;
    
    &:hover{
        color: var(--color-primary);
    }
`

export const CarouselBtnActive = styled(CarouselBtn)`
    font-weight: 700;
    color: var(--color-primary);
`