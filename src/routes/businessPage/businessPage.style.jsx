import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const BuisinessContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const UpperText = styled.h4`
    color: var(--color-black);
    padding: 10.4rem 3rem;
    font-size: 2.6rem;
    text-align: center;
    max-width: 95rem;
    letter-spacing: -2%;
    line-height: 140%;
`

export const TextCss = styled.p`
    color: var(--color-black);
    font-size: 1.6rem;
    text-align: center;
    margin: 1.5rem 5rem 4rem 5rem;
    line-height: 160%;
`

export const StoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
    gap: 2rem;
    margin-bottom: 8rem;
    width: 100%;
    max-width: 100rem;
`

export const BessContainer = styled.div`
    background-color: var(--color-grey-light-3);
    padding: 5rem 4rem;
    width: 100%;
`

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    flex: 1400px 0 1;
    gap: 10px;
`

export const RelatedContainer = styled.div`
    padding: 5rem 4rem;
    width: 100%;
`

export const FlexCenter = styled.div`
    display: flex;
    justify-content: center;
`

export const RelatedCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(520px, 1fr));
    flex: 1600px 0 1;
    gap: 2rem;
    @media ${mediaQuery.styledMobile} {
        grid-template-columns: 1fr;
    }
`



