import styled from "styled-components"
import mediaQuery from "../../helper/mediaQuery"

export const EsgContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 16rem 2rem 20rem 2rem;
    gap: 16rem;
    @media ${mediaQuery.styledTablet} {
        padding: 16rem 2rem 12rem 2rem;
    }
    @media ${mediaQuery.styledMobile} {
        padding: 6.4rem 2rem 12rem 2rem;
        gap: 6.4rem;
    }
`

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8rem;
    @media ${mediaQuery.styledTablet} {
        gap: 5.6rem;
    }
    @media ${mediaQuery.styledMobile} {
        gap: 4rem;
    }
`

export const UpperCardContainer = styled.div`
    display: grid;
    gap: 6.4rem;
    flex: 1440px 0 1;
    grid-template-columns: repeat(3, 1fr);

    @media ${mediaQuery.styledTablet} {
        gap: 4.8rem;
        flex: 630px 0 1;
        grid-template-columns: 1fr;
    }
    @media ${mediaQuery.styledMobile} {
        gap: 6.4rem;
    }

`

export const LowerCardContainer = styled.div`
    display: grid;
    width: 100%;
    flex: 1440px 0 1;
    gap: 4rem;
    grid-template-columns: repeat(auto-fit, minmax(47rem, 1fr)); 
    
    @media ${mediaQuery.styledTablet} {
        grid-template-columns: repeat(auto-fit, minmax(40.5rem, 1fr)); 
        gap: 2.4rem;
    }
    @media ${mediaQuery.styledMobile} {
        grid-template-columns: 1fr;
        gap: 2.4rem;
    }
`

export const TableContainer = styled.div`
    display: grid;
    flex: 1440px 0 1;
    grid-template-columns: max-content 1fr max-content;
    @media ${mediaQuery.styledMobile} {
        grid-template-columns: 1fr max-content;
    }
`

export const ReportGrid = styled.div`
    display: grid;
    flex: 1440px 0 1;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 6.4rem;
    @media ${mediaQuery.styledTablet} {
        column-gap: 2.4rem;
    }
    @media ${mediaQuery.styledMobile} {
        grid-template-columns: 1fr;
    }
`

export const FlexCenter = styled.div`
    display: flex;
    justify-content: center;
`