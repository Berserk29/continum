import styled, {css} from "styled-components";

// CSS COMPONENT

const titleCss = css`
   font-family: 'Gmarket Sans';
   font-weight: 700;
   font-size: 3.2rem;
   line-height: 120%;
`

const titleCss2 = css`
    text-transform: none;
    color: var(--color-black);
`

const notoCss = css`
    font-family: 'Noto Sans';
    color: var(--color-black);
    font-weight: 700;
`

// STYLED COMPONENT

export const Title1 = styled.span`
    ${titleCss};
    color: var(--color-white);
`

export const Title1Black = styled(Title1)`
    color: var(--color-black);
`

export const Title2 = styled.h2`
    ${titleCss};
    font-size: 4.3rem;
    color: var(--color-white);
    text-align: center;
`

export const Title3 = styled.h3`
    ${titleCss};
    ${titleCss2};
    letter-spacing: -2%;
    font-size: 3.6rem;
    text-align: center;
`

export const Title4 = styled.h4`
    ${titleCss};
    ${titleCss2};
`

export const TitleNoto1 = styled.h5`
    ${notoCss};
    font-size: 3.2rem;
    text-transform: none;
    line-height: 140%;
    letter-spacing: -2%;
`

export const TitleNoto2 = styled.h5`
    ${notoCss};
    font-size: 2.2rem;
    text-transform: none;
    letter-spacing: -3%;
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
    letter-spacing: -5%;
`

export const Text1 = styled.p`
    ${notoCss};
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 160%;
    letter-spacing: -2%;
`

export const Text2 = styled(Text1)`
    font-size: 1.6rem;
    color: var(--color-white);
`

export const Text3 = styled(Text1)`
    font-size: 1.5rem;
    color: var(--color-black-2);
`

export const Text4 = styled(Text1)`
    font-size: 1.5rem;
    letter-spacing: 0%;
    color: var(--color-grey);
`

export const Text5 = styled.p`
    ${notoCss}
    font-weight: 400;
    font-size: 1.4rem;
    opacity: .6;
    letter-spacing: -4%;
`