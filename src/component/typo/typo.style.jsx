import styled, {css}  from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

// CSS

const CssHeadline = css`
    font-family: 'Gmarket Sans';
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 160%;
    white-space: pre-line;
`

const CssNoto = css`
    font-family: 'Noto Sans';
    font-weight: 400;
    letter-spacing: -0.02em;
    line-height: 160%;
    white-space: pre-line;
`

const H1 = css`
    ${CssHeadline};
    font-size: 5rem;
`

const H2 = css`
    ${CssHeadline};
    font-size: 4.2rem;
`

const H3 = css`
    ${CssHeadline};
    font-size: 3.6rem;
`

const H4 = css`
    ${CssHeadline};
    font-size: 3.2rem;
`

const H5 = css`
    ${CssHeadline};
    font-size: 2.8rem;
`

const B1 = css`
    ${CssNoto};
    font-size: 2.6rem;
    font-weight: 700;
`

const B2 = css`
    ${CssHeadline};
    font-size: 2.4rem;
`

const B3 = css`
    ${CssNoto};
    font-size: 2.2rem;
    font-weight: 700;
`

const B4 = css`
    ${CssNoto};
    font-size: 2rem;
`

const B5 = css`
    ${CssNoto};
    font-size: 1.8rem;
    font-weight: 700;
`

const B6 = css`
    ${CssNoto};
    font-size: 1.8rem;
`

const B7 = css`
    ${CssNoto};
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 100%;
`

const B8 = css`
    ${CssNoto};
    font-size: 1.6rem;
    line-height: 200%;
`

const B9 = css`
    ${CssNoto};
    font-size: 1.5rem;
`

const B10 = css`
    ${CssNoto};
    font-size: 1.5rem;
    line-height: 200%;
`

const B11 = css`
    ${CssNoto};
    font-size: 1.4rem;
`


// STYLED COMPONENT
export const Headline1Home = styled.h1`
    ${H1}
    color: ${props => props.color || 'var(--color-050)'};
    @media ${mediaQuery.styledTablet} {
        ${H4}
    }
    @media ${mediaQuery.styledMobile} {
       ${B1}
    }
`

export const Headline1Header = styled.h1`
    ${H1}
    color: ${props => props.color || 'var(--color-050)'};
    @media ${mediaQuery.styledMobile} {
        ${H4}
    }
`

export const Headline2 = styled.h2`
    ${H2};
    color: ${props => props.color || 'var(--color-050)'};
    @media ${mediaQuery.styledTablet} {
        ${H4}
    }
    @media ${mediaQuery.styledMobile} {
        ${H5}
    }
`

export const Headline3 = styled.h3`
    ${H2};
    color: ${props => props.color || 'var(--color-secondary)'};
    @media ${mediaQuery.styledTablet} {
        ${H5}
    }
    @media ${mediaQuery.styledMobile} {
        ${B1}
    }
`

export const Headline4 = styled.h3`
    ${H3}
    color: ${props => props.color || 'var(--color-secondary)'};
    @media ${mediaQuery.styledTablet} {
        ${H4}
    }
    @media ${mediaQuery.styledMobile} {
        ${B2}
    }
`

export const Headline5 = styled.h4`
    ${B1}
    color: ${props => props.color || 'var(--color-secondary)'};
    @media ${mediaQuery.styledTablet} {
        ${B3}
    }
`

export const Headline6 = styled.h4`
    ${B1}
    color: ${props => props.color || 'var(--color-secondary)'};
    @media ${mediaQuery.styledTablet} {
        ${B3}
    }
    @media ${mediaQuery.styledMobile} {
        ${B5}
    }
`

export const SpanOrange = styled.span`
    ${B5}
    color: var(--color-primary);
    margin-left: 1.4rem;
    @media ${mediaQuery.styledTablet} {
        ${B7}
    }
`

export const SpanGrey = styled.span`
    ${B5}
    color: var(--color-white-opa60);
    cursor: pointer;
    transition: color .2s;
    :hover {
        color: var(--color-primary);
    }
    @media ${mediaQuery.styledTablet} {
        ${B7}
    }
`

export const Link = styled.span`
    ${B7}
    color: ${props => props.color || 'var(--color-050)'};
    cursor: pointer;
    transition: color .2s;
    :hover{
        color: var(--color-primary);
    }
`

export const Text1 = styled.p`
    ${B6}
    color: ${props => props.color || 'var(--color-050)'};
    @media ${mediaQuery.styledTablet} {
        ${B4}
    }
    @media ${mediaQuery.styledMobile} {
        ${B8}
        color: var(--color-white-opa80);
    }
`

export const Text2 = styled.p`
    ${B4}
    color: ${props => props.color || 'var(--color-secondary)'};
    @media ${mediaQuery.styledTablet} {
        ${B8}
    }
    @media ${mediaQuery.styledMobile} {
        ${B8}
        color: var(--color-black-opa80);
    }
`

export const Text3 = styled.p`
    ${B6}
    color: ${props => props.color || 'var(--color-black-opa80)'};
    @media ${mediaQuery.styledTablet} {
        ${B9}
    }
    @media ${mediaQuery.styledMobile} {
        ${B10}
    }
`

export const Text4 = styled.p`
    ${B8}
    color: ${props => props.color || 'var(--color-black-opa60)'};
    @media ${mediaQuery.styledTablet} {
        ${B11}
    }
    @media ${mediaQuery.styledMobile} {
        ${B9}
    }
`

export const Text5 = styled.p`
    ${B7}
    color: ${props => props.color || 'var(--color-050)'};
    @media ${mediaQuery.styledTablet} {
        ${B11}
    }
`

export const TextTable = styled.p`
    ${B6}
    color: var(--color-500);
    @media ${mediaQuery.styledTablet} {
        ${B9}
    }
    @media ${mediaQuery.styledMobile} {
        color: ${props => props.color || 'var(--color-black-opa60)'}
    }
`

export const TextHome = styled.p`
    ${B2}
    color: ${props => props.color || 'var(--color-white-opa60)'};
    @media ${mediaQuery.styledTablet} {
        ${B4}
        color: var(--color-050);
    }
    @media ${mediaQuery.styledMobile} {
        ${B8}
    }
`



export const FooterHeading = styled.span`
    ${B6}
    color: var(--color-050);
    @media ${mediaQuery.styledTablet} {
        ${B11}
    }
`

export const FooterLink = styled.li`
    ${B8}
    color: var(--color-white-opa30);
    transition: color .2s;
    cursor: pointer;
    :hover {
        color: var(--color-primary);
    }
    @media ${mediaQuery.styledTablet} {
        ${B11}
    }
`