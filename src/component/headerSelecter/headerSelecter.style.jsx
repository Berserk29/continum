import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const Container = styled.div`
    position: absolute;
    top: 44rem;
    left: 10rem;
    display: flex;
    gap: 1.6rem;
    align-items: center;
    @media ${mediaQuery.styledTablet} {
        left: 4rem;
        top: 46rem;
    }
`

export const IconCss = styled.img`
    width: 2.4rem;
    height: 100%;
    @media ${mediaQuery.styledTablet} {
        width: 2rem;
    }
`