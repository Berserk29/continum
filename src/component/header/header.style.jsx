import styled from "styled-components";
import { backToLife } from "../../animation/animation.style";
import mediaQuery from "../../helper/mediaQuery";

// Home for homepage and Other for other page

export const HeaderContainerHome = styled.div`
    height: 90vh;
    width: 100%;
    background-size: cover;
    background-position: center;
`

export const HeaderContainerOther = styled(HeaderContainerHome)`
    height: 53rem;
    text-align: center;
`

export const TitleHeaderOther = styled.h2`
    color: var(--color-white);
    font-size: 5rem;
    font-weight: 800;
    margin-top: 14rem;
`

export const TitleHeaderHome = styled.h1`
    color: var(--color-white);
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    top: 30%;
    margin-left: 13.4rem;
    animation-name: ${backToLife}; 
    animation-duration: 3s;
    @media ${mediaQuery.styledTablet} {
        margin-left: 0;
        padding: 0 5rem;
    }
`

export const HeaderMain = styled.span`
    font-weight: 800;
    font-size: 5rem;
`

export const HeaderSub = styled.span`
    font-weight: 400;
    font-size: 2.6rem;
`



