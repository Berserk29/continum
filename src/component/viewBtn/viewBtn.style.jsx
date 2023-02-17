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
    0% { 
        opacity: 0;
    }
    100% {
        opacity: 1;
        transform: translateX(1.5rem);
    }
`

const BringColor = keyframes`
    0% { 
        opacity: .7;
    }
    100% {
        opacity: 1;
        filter: var(--filter-primary);
    }
`

export const ArrowView = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    transition: all .5s;
    opacity: 0;
`

export const ArrowViewVisible = styled(ArrowView)`
    margin-left: .3rem;
    opacity: .7;
    filter: var(--filter-grey);
`

export const MovingArrowView = styled(ArrowView)`
    animation: ${MovingRight} 0.8s forwards;
`

export const VisibleArrowView = styled(ArrowViewVisible)`
    animation: ${BringColor} 0.8s forwards;
`
