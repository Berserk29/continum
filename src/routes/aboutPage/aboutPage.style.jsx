import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";


export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8rem;
    padding: 12rem 0;
    @media ${mediaQuery.styledTablet} {
        padding: 12rem 5rem;
    }
    @media ${mediaQuery.styledMobile} {
        padding: 6.4rem 2rem;
        gap: 4rem;
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 11.95rem;
    @media ${mediaQuery.styledTablet} {
        gap: 8rem;
    }
    @media ${mediaQuery.styledMobile} {
        gap: 6.4rem;
    }
`