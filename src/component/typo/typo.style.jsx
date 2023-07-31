import styled, {css} from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

// CSS COMPONENT

const titleCss = css`
   font-family: 'Gmarket Sans';
   font-weight: 700;
   font-size: 3.2rem;
   line-height: 120%;
`

const notoCss = css`
    font-family: 'Noto Sans';
    color: var(--color-black);
    font-weight: 700;
`

// STYLED COMPONENT

export const Title1 = styled.span`
    ${titleCss};
    line-height: 160%;
    color: var(--color-white);
    @media ${mediaQuery.styledMobile} {
        font-size: 2.6rem;
    }
`

export const Title1Black = styled(Title1)`
    color: var(--color-black);
`

export const Title2 = styled.h2`
    ${titleCss};
    font-size: 4.3rem;
    color: var(--color-white);
    @media ${mediaQuery.styledMobile} {
        font-size: 3.2rem;
    }
`

export const Title3 = styled.h3`
    ${titleCss};
    color: var(--color-black);
    letter-spacing: -0.02em;
    font-size: 3.6rem;
    @media ${mediaQuery.styledTablet} {
        font-size: 3.2rem;
    }
    @media ${mediaQuery.styledMobile} {
        font-size: 2.4rem;
        line-height: 160%;
    }
`

export const Title4 = styled.h4`
    ${titleCss};
    color: var(--color-black);
    @media ${mediaQuery.styledTablet} {
        font-size: 2.8rem;
    }
    @media ${mediaQuery.styledMobile} {
        font-size: 3.2rem;
    }
`

export const Title5 = styled.h4`
    ${titleCss};
    color: var(--color-black);
    line-height: 140%;
    letter-spacing: -0.02em;
    @media ${mediaQuery.styledTablet} {
        font-size: 2.8rem;
    }
    @media ${mediaQuery.styledMobile} {
        font-size: 2.6rem;
    }
`

export const TitleNoto1 = styled.h5`
    ${notoCss};
    font-size: 2.2rem;
    text-transform: none;
    letter-spacing: -0.03em;
`

export const OrangeSpan = styled.span`
    ${notoCss};
    color: var(--color-primary);
    font-size: 1.6rem;
    text-transform: capitalize;
    line-height: 160%;
`

export const OrangeSpanHover = styled(OrangeSpan)`
    opacity: 60%;
    color: var(--color-white);
`

export const OrangeSpan2 = styled.span`
    ${notoCss};
    color: var(--color-primary);
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: -0.05em;
`

export const Text1 = styled.p`
    ${notoCss};
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 160%;
    white-space: pre-line;
    @media ${mediaQuery.styledTablet} {
        font-size: 1.6rem;
    }
    @media ${mediaQuery.styledMobile} {
        font-size: 1.5rem;
        line-height: 180%;
        letter-spacing: -0.02em;
        color: var(--color-black);
    }
`

export const Text2 = styled(Text1)`
    font-size: 1.6rem;
    color: var(--color-white);
`

export const Text3 = styled(Text1)`
    font-size: 1.5rem;
    color: var(--color-black-2);
    opacity: .8;
`

export const Text4 = styled(Text1)`
    font-size: 1.5rem;
    letter-spacing: 0em;
    color: var(--color-grey);
`

export const Text5 = styled.p`
    ${notoCss}
    font-weight: 400;
    font-size: 1.4rem;
    opacity: .6;
    letter-spacing: -0.04em;
`