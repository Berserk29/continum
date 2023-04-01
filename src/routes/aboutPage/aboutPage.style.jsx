import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";


export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8rem;
    padding: 10.4rem 4rem;
    @media ${mediaQuery.styledTablet} {
        padding: 8rem 4rem;
    }
    @media ${mediaQuery.styledMobile} {
        padding: 4rem 2.5rem;
    }
`

export const UpperText = styled.h4`
    color: var(--color-black);
    font-size: 4rem;
    text-align: center;
`