import styled from "styled-components";
import { detect } from "detect-browser";
import mediaQuery from "../../helper/mediaQuery";
const browser = detect();

export const Container = styled.div`
    /* Disable Scroll-snap for safari */
    width: 100vw;    
    height: 100vh;
    overflow-y: scroll;

    /* If lower than 650px will not get code */
    @media ${mediaQuery.styledMinHeight} {

        ${() => {
        if(browser && browser.name !== 'safari') {
            return `
            ::-webkit-scrollbar {
                display: none
            }
            overflow-y: scroll;
            scroll-snap-type: y mandatory;
            scroll-snap-stop: always;
            scroll-behavior: smooth;
            `
        }}}
    }
`
