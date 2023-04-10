import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";


export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8rem;
    padding: 10.4rem 4rem;
    @media ${mediaQuery.styledTablet} {
        padding: 8rem 2rem;
    }
    @media ${mediaQuery.styledMobile} {
        padding: 5rem 2rem;
        gap: 5rem;
    }
`

export const UpperText = styled.h4`
    color: var(--color-black);
    font-size: 4rem;
    text-align: center;
    @media ${mediaQuery.styledTablet} {
        font-size: 3.2rem;
    }
    @media ${mediaQuery.styledMobile} {
        font-size: 2.75rem;
    }

`