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
    @media ${mediaQuery.styledMobile} {
        font-size: 2.25rem;
        padding: 5rem 2rem 10rem 2rem;
    }
`

export const TextCss = styled.p`
    color: var(--color-black);
    font-size: 1.6rem;
    text-align: center;
    margin: 0.8rem 5rem 4rem 5rem;
    line-height: 160%;
    @media ${mediaQuery.styledMobile} {
        font-size: 1.75rem;
        margin: 1rem 0 3rem 0;
    }
`

export const StoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
    margin-bottom: 8rem;
    width: 100%;
    max-width: 140rem;
`

export const BessContainer = styled.div`
    background-color: var(--color-grey-light-3);
    padding: 8rem 4rem;
    width: 100%;
    @media ${mediaQuery.styledTablet} {
        padding: 8rem 1.6rem 2.4rem 1.6rem;
    }
    @media ${mediaQuery.styledMobile} {
        padding: 5rem 2rem 3rem 2rem;
    }
`

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    flex: 1400px 0 1;
    gap: .8rem;
    @media ${mediaQuery.styledTablet}{
        gap: 1.6rem;
    }
    @media ${mediaQuery.styledMobile}{
        grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
        gap: 3rem; 
    }
`

export const RelatedContainer = styled.div`
    padding: 8rem 4rem 12rem 4rem;
    width: 100%;
    @media ${mediaQuery.styledTablet} {
        padding: 8rem 4rem;
    }
    @media ${mediaQuery.styledMobile} {
        padding: 7rem 2rem 8rem 2rem;
    }
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



