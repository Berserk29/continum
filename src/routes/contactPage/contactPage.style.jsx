import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 14.7rem 4rem 16rem 4rem;
    gap: 6.75rem;
    @media ${mediaQuery.styledTablet} {
        padding: 11rem 4rem 16rem 4rem;
    }
    @media ${mediaQuery.styledMobile} {
        padding: 5rem 2rem 12rem 2rem;
        gap: 3.5rem
    }
`

export const TableContainer = styled.div`
    width: 100%;
    display: grid;
    flex: 1440px 0 1;
    justify-content: center;
    grid-template-columns: max-content 1fr max-content max-content;
    @media ${mediaQuery.styledTablet} {
        flex: 750px 0 1;
        grid-template-columns: max-content 1fr;
    }
    @media ${mediaQuery.styledMobile} {
        grid-template-columns: min-content 1fr;
    }
`

export const FlexCenter = styled.div`
    display: flex;
    justify-content: center;
`

export const TypoContainer = styled.div`
    text-align: center;
`