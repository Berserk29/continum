import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10.4rem 4rem 12rem 4rem;
    gap: 6rem;
    @media ${mediaQuery.styledMobile} {
        padding: 5rem 2rem 7rem 2rem;
        gap: 4rem
    }
`

export const TableContainer = styled.div`
    width: 100%;
    display: grid;
    justify-content: center;
    grid-template-columns: 20.4rem 35.8rem 18.4rem 37.4rem;
    @media ${mediaQuery.styledTablet} {
        grid-template-columns: 1fr 3fr;
    }
    @media ${mediaQuery.styledMobile} {
        grid-template-columns: min-content 1fr;
    }
`