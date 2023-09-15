import styled from "styled-components";
import { detect } from "detect-browser";
const browser = detect();

export const Container = styled.div`
    /* Disable Scroll-snap for safari */
        width: 100vw;
        height: 100vh;
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
        }
    }}
`
