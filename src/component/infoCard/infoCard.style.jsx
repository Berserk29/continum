import styled from "styled-components";

export const CardContainer = styled.div`
    background-color: var(--color-grey-light-3);
    display: flex;
    gap: 2rem;
    align-items: center;
    padding: 3rem 2rem;
    /* max-width: 38rem; */
`

export const WhiteCardContainer = styled(CardContainer)`
    background-color: var(--color-white);
    padding: 2rem 2rem;
`

export const ImageCard = styled.img`
    height: 6rem;
    width: 6rem;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const HeadingCard = styled.h5`
    font-size: 1.8rem;
` 

export const HeadingWhiteCard = styled.h5`
    font-size: 1.2rem;
    text-transform: uppercase;
    color: var(--color-primary);
`

export const TextCard = styled.p`
    font-size: .9rem;
    color: var(--color-grey);
    font-weight: 500;
    line-height: 1.5rem;
`

export const TextWhiteCard = styled(TextCard)`
    color: var(--color-black);
`