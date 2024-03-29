import styled, {css} from "styled-components";
import { detect } from "detect-browser";
import { backToLife, upAndDown } from "../../animation/keyframes.style";
import mediaQuery from "../../helper/mediaQuery";
const browser = detect();

export const SnapCss = css`
    scroll-snap-align: none;
    scroll-snap-stop: none;

    /* If lower than 650px will not read this block of code*/
    @media ${mediaQuery.styledMinHeight} {
        ${() => {
            // Prevent Safari 
            if(browser && browser.name !== 'safari' ) {
                return `
                scroll-snap-align: center;
                scroll-snap-stop: always;
                `
            }
        }}
    }
`


// INFO HOMEPAGE
export const HeaderContainerHome = styled.div`
    position: relative;
    height: 100vh;
    min-height: 65rem;
    width: 100%;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    min-height: 60rem;
    ${SnapCss}
`

export const VideoCss = styled.video`
    position: absolute;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    left: 0;
    top: 0;
    z-index: -1;
    min-height: 60rem;
`

export const TitleHeaderHome = styled.div`
    position: absolute;
    width: 95%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${backToLife} 3s; 
`

export const Mouse = styled.div`
    position: absolute;
    bottom: 5rem;
    left: 50%;
    transform: translate(-50%);
    width: 2rem;
    height: 3rem;
    opacity: .9;
    border-radius: 40%;
    border: 2px solid white;
    animation: ${backToLife} 4s; 
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
    @media ${mediaQuery.styledMobile} {
        bottom: 8rem
    }
`

// INFO OTHER PAGE
export const HeaderContainerOther = styled.div`
    position: relative;
    background-image: url(${props => props.imageUrl});
    width: 100%;
    height: 53rem;
    background-size: cover;
    background-position: center;
    text-align: center;
    @media ${mediaQuery.styledMobile} {
        height: 35.8rem;
    }
`

export const TitleHeaderOther = styled.div`
    margin-top: 14rem;
    animation: ${backToLife} 2s; 
    @media ${mediaQuery.styledMobile} {
        padding: 0 1rem;
        margin-top: 10rem;
    }
`