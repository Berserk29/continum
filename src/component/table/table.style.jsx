import styled from "styled-components";

export const WhiteContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--color-white);
    padding: 1.5rem;
    text-align: start;
    border-top: 1px solid var(--color-grey-light-2);
    border-bottom: 1px solid var(--color-grey-light-2);
`

export const ListContainer = styled(WhiteContainer)`
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
`

export const WhiteCenterContainer = styled(WhiteContainer)`
    justify-content: center;
`

export const GreyHeadingContainer = styled(WhiteContainer)`
    background-color: var(--color-grey-light-3);
    justify-content: center;
    text-align: center;
    font-weight: 700;
`

export const WhiteHeadingContainer = styled(GreyHeadingContainer)`
    background-color: var(--color-white);
`

export const IconImg = styled.img`
    width: .8rem;
    height: .8rem;
    margin: 0 .6rem;
`

export const WithDot = styled.li`
    line-height: 1.6rem;
    list-style: inside;
`

export const WithoutDot = styled.li`
    line-height: 1.8rem;
    list-style: none;
`

