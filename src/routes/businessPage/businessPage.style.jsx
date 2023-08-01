import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const BuisinessContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12rem 0;
    gap: 8rem;
    @media ${mediaQuery.styledMobile} {
        padding: 6.4rem 0 12rem 0;
    }
`

export const StoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 7.8rem;
    margin-bottom: 2rem;
    width: 100%;
    max-width: 140rem;
    gap: 8rem;
    @media ${mediaQuery.styledMobile} {
        padding: 0 2rem
    }
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8rem;
    background-color: var(--color-200);
    padding: 8rem 13.4rem;
    width: 100%;
    @media ${mediaQuery.styledTablet} {
        padding: 8rem 1.6rem 2.4rem 1.6rem;
    }
    @media ${mediaQuery.styledMobile} {
        padding: 5rem 2rem 3rem 2rem;
    }
`

export const InfoCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    flex: 932px 0 1;
    gap: 3.2rem;
    @media ${mediaQuery.styledTablet}{
        gap: 1.6rem;
    }
    @media ${mediaQuery.styledMobile}{
        grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
        gap: 3rem; 
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 11.95rem;
    @media ${mediaQuery.styledTablet} {
        gap: 8rem;
    }
    @media ${mediaQuery.styledMobile} {
        gap: 6.4rem;
    }
`

export const FlexCenter = styled.div`
    display: flex;
    justify-content: center;
`




