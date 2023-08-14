import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${props => props.gap?.[0] || 2.75}rem;
    @media ${mediaQuery.styledTablet} {
        gap: ${props => props.gap?.[1] || 2.35}rem;
    }
    @media ${mediaQuery.styledMobile} {
        gap: 1.6rem;
    }
`