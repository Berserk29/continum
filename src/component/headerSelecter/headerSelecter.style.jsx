import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const Container = styled.div`
    position: absolute;
    bottom: 5rem;
    left: 10rem;
    display: flex;
    gap: 1.6rem;
    align-items: center;
    @media ${mediaQuery.styledTablet} {
        left: 4rem;
        bottom: 4rem;
    }
`

export const IconCss = styled.img`
    width: 2.4rem;
    height: 100%;
    @media ${mediaQuery.styledTablet} {
        width: 2rem;
    }
`