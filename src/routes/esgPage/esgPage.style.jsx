import styled from "styled-components"
import mediaQuery from "../../helper/mediaQuery"

export const EsgContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12rem 8rem 12rem 8rem;
    gap: 12rem;
    @media ${mediaQuery.styledTablet} {
        padding: 8rem 1.6rem;
    }
    @media ${mediaQuery.styledMobile} {
        gap: 3rem;
        padding: 5rem 2rem 3.5rem 2rem;
    }
`

export const TableContainer = styled.div`
    display: grid;
    grid-template-columns: max-content 1fr max-content;
`

export const FlexCenter = styled.div`
    display: flex;
    justify-content: center;
`