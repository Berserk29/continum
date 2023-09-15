import { css, keyframes } from "styled-components";

export const backToLife = keyframes`
    0% , 10% { opacity: 0; }
    100% { opacity: 1; }
`

export const upAndDown = keyframes`
    0%, 100% {transform: translateY(0)}
    50% {transform: translateY(-1rem)}
`

export const comingRight = keyframes`
    0% {
        transform: translateX(-4rem);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`

export const comingUp = keyframes`
    0%, 30% {
        transform: translateY(4rem);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
`

export const comingBack = keyframes`
    0%, 70% {opacity: 0;}
    100% {opacity: 1;}
`

export const slideInAnimation = keyframes`
  from { transform: translateY(-100%) ;}
  to { transform: translateY(0) ;}
`

export const slideOutAnimation = keyframes`
    from { transform: translateY(0%) ;}
    to { transform: translateY(-100%) ;} 
`

export const globeAniHiden = keyframes`
    0% { opacity: 1}
    99% { opacity: 0 }
    100% {
        opacity: 0;
        display: none
    }
`

export const AnimationChoice = css`
    animation: ${props => props.animation} ${props => props.time}s;
`