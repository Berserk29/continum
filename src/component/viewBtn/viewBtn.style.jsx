import styled, { keyframes } from "styled-components";

export const ViewContainer = styled.div`
    display: flex;
    align-items: center;
`

export const BtnView = styled.a`
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1rem;
    text-decoration: none;
    color: var(--color-grey-light);
    transition: all .2s;
    cursor: pointer;

    &:hover {
        color: var(--color-primary)
    }
`
const MovingRight = keyframes`
    0% { opacity: 0;}
    100% {
        opacity: 1;
        transform: translateX(1.5rem);
    }
`

export const ArrowView = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    transition: all .5s;
    opacity: 0;
`

export const MovingArrowView = styled(ArrowView)`
    animation: ${MovingRight} 0.8s forwards;
`
