import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const TextHeadingCss = styled.h3`
    color: var(--color-black);
    font-size: 4rem;
    text-align: center;
    @media ${mediaQuery.styledMobile} {
        font-size: 3.25rem;
    }
`

export const TextHeadingStart = styled(TextHeadingCss)`
    text-align: start;
`