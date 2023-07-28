import styled from "styled-components";
import { backToLife, upAndDown } from "../../animation/animation.style";
import mediaQuery from "../../helper/mediaQuery";

// Home for homepage and Other for other page

export const HeaderContainerHome = styled.div`
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-position: center;
`

export const HeaderContainerOther = styled(HeaderContainerHome)`
    height: 53rem;
    text-align: center;
    @media ${mediaQuery.styledMobile} {
        height: 40rem;
    }
`

export const Mouse = styled.div`
    position: absolute;
    bottom: 4rem;
    left: 50%;
    transform: translate(-50%);
    width: 2rem;
    height: 3rem;
    opacity: .9;
    border-radius: 40%;
    border: 2px solid white;
    animation-name: ${backToLife}; 
    animation-duration: 4s;
    &:after {
        content: ' ';
        position: absolute;
        top: .2rem;
        left: 0.7rem;
        width: .2rem;
        height: .7rem;
        background-color: white;
        color: white;
        animation: ${upAndDown} 2.5s infinite;
    }
`

export const TitleHeaderOther = styled.h2`
    margin-top: 14rem;
    @media ${mediaQuery.styledMobile} {
        padding: 0 1rem;
        margin-top: 13rem;
    }
`

export const TitleHeaderHome = styled.h1`
    margin-top: 35vh;
    animation-name: ${backToLife}; 
    animation-duration: 3s;
`



