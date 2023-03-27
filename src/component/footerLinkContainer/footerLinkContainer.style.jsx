import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const Heading = styled.h3`
    font-weight: 500;
    color: var(--color-white);
    @media ${mediaQuery.styledTablet} {
        font-size: 1.2rem;
        cursor: pointer;
        :hover{
            color: var(--color-primary);
        }
    }
`