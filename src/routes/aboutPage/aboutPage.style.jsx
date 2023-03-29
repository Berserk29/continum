import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";


export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    padding: 5rem 2rem;
    @media ${mediaQuery.styledTablet} {
        padding: 5rem 1rem;
    }
    @media ${mediaQuery.styledMobile} {
        padding: 4rem 2.5rem;
    }
`

export const UpperText = styled.h4`
    font-size: 2rem;
    text-align: center;
    max-width: 80rem;
`