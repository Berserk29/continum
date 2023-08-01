import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const BuisinessContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16rem 2rem 12rem 2rem;
    width: 100%;
    max-width: 148rem;
    gap: 12rem;
    @media ${mediaQuery.styledTablet} {
        padding: 16rem 4rem 8rem 4rem;
        gap: 8rem;
    }
    @media ${mediaQuery.styledMobile} {
        padding: 6.4rem 2rem;
        gap: 6.4rem;
    }
`
export const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10.2rem;
    @media ${mediaQuery.styledTablet} {
        gap: 4rem;
    }
`


export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12rem;
    background-color: var(--color-200);
    padding: 12rem 2rem;
    width: 100%;
    @media ${mediaQuery.styledTablet} {
        padding: 8rem 4rem;
        gap: 4rem;
    }
    @media ${mediaQuery.styledMobile} {
        padding: 6.4rem 2rem;
    }
`

export const InfoCardContainer = styled.div`
    display: grid;
    flex: 1440px 0 1;
    gap: 6.4rem;
    /* TODO minmax 30rem could change when the design break */
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));

    @media ${mediaQuery.styledTablet}{
        gap: 3.2rem;
    }
    @media ${mediaQuery.styledMobile}{
        grid-template-columns: 1fr;
        gap: 4rem; 
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12rem;
    padding: 16rem 2rem 20rem 2rem;
    @media ${mediaQuery.styledTablet} {
        gap: 4rem;
        padding: 12rem 4rem 20rem 4rem;
    }
    @media ${mediaQuery.styledMobile} {
        padding: 6.4rem 2rem 12rem 2rem;
    }
`

export const SectionCard = styled(Section)`
    gap: 12rem;
    @media ${mediaQuery.styledTablet} {
        gap: 8rem;
    }
    @media ${mediaQuery.styledMobile} {
        gap: 5.6rem;
    }
`

export const FlexCenter = styled.div`
    display: flex;
    justify-content: center;
`




