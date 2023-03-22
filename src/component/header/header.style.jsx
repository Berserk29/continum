import styled from "styled-components";
import { backToLife } from "../../animation/animation.style";

// Home for homepage and Other for other page

export const HeaderContainerHome = styled.div`
    height: 90vh;
    width: 100%;
    background-size: cover;
    background-position: center;
`

export const HeaderContainerOther = styled(HeaderContainerHome)`
    height: 80vh;
    text-align: center;
`

export const TitleHeaderOther = styled.h2`
    color: var(--color-white);
    font-size: 4rem;
    font-weight: 500;
    letter-spacing: -2px;
    margin-top: 13rem;
`

export const TitleHeaderHome = styled.h1`
    color: var(--color-white);
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    top: 30%;
    margin-left: 12.5rem;
    animation-name: ${backToLife}; 
    animation-duration: 3s;
`

export const HeaderMain = styled.span`
    font-weight: 500;
    font-size: 4.5rem;
    letter-spacing: -2px;
`

export const HeaderSub = styled.span`
    font-weight: 400;
    font-size: 3rem;
`



