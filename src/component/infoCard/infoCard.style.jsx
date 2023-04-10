import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const CardContainer = styled.div`
    background-color: var(--color-grey-light-3);
    display: flex;
    gap: 2rem;
    align-items: center;
    padding: 5.4rem 3.2rem;
    @media ${mediaQuery.styledMobile} {
        padding: 4rem 1rem;
    }
`

export const WhiteCardContainer = styled(CardContainer)`
    background-color: var(--color-white);
    padding: 2rem 2rem;
    @media ${mediaQuery.styledMobile} {
        gap: 1rem;
        padding: 1rem 1rem;
    }
`

export const ImageCard = styled.img`
    height: 10.8rem;
    @media ${mediaQuery.styledMobile} {
        height: 9.25rem;
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const HeadingCard = styled.h5`
    font-size: 2.6rem;
    @media ${mediaQuery.styledMobile} {
        font-size: 2.25rem;
    }
` 

export const HeadingWhiteCard = styled.h5`
    font-size: 1.2rem;
    text-transform: uppercase;
    color: var(--color-primary);
`

export const TextCard = styled.p`
    font-size: 1.4rem;
    color: var(--color-grey);
    line-height: 160%;
`

export const TextWhiteCard = styled(TextCard)`
    color: var(--color-black);
`