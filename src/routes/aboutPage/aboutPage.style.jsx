import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12rem;
    padding: 16rem 3rem;
    @media ${mediaQuery.styledTablet} {
        padding: 16rem 8rem;
        gap: 8rem;
    }
    @media ${mediaQuery.styledMobile} {
        padding: 6.4rem 2rem;
        gap: 6.4rem;
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12rem;
    @media ${mediaQuery.styledTablet} {
        gap: 8rem;
    }
    @media ${mediaQuery.styledMobile} {
        gap: 6.4rem;
    }
`