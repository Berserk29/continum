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
        align-items: flex-start;
    }
`

export const LinkCss = styled.a`
    font-family: 'Noto Sans';
    font-weight: 400;
    letter-spacing: -0.02em;
    line-height: 160%;
    white-space: pre-line;
    font-size: 1.6rem;
    color: ${props => props.color || 'var(--color-white-opa30)'};
    transition: color .3s;
    cursor: pointer;
    :hover {
        color: var(--color-primary);
    }
    @media ${mediaQuery.styledTablet} {
        font-size: 1.4rem;
    }
`