import styled from "styled-components"
import mediaQuery from "../../helper/mediaQuery"

export const SubstainContainer = styled.div`
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

export const TextCss = styled.div`
    color: var(--color-black);
    text-align: center;
    margin-top: 1rem;
    line-height: 160%;
    font-size: 1.6rem;
    max-width: 104rem;
    @media ${mediaQuery.styledMobile}{
        margin-top: 1.25rem;
        font-size: 2rem;
    }
`

export const EthicalContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    flex: 142rem 0 1;
    @media ${mediaQuery.styledTablet} {
        grid-gap: 1.6rem;
        grid-template-columns: 1fr;
    }
    @media ${mediaQuery.styledMobile} {
        gap: 3rem;
        grid-template-columns: 1fr;
    }
`

export const Container = styled.div`
    padding: 4rem;
    flex: 150rem 0 1;
    @media ${mediaQuery.styledMobile} {
        padding: 3.5rem 2rem;
    }
`

export const TableContainer = styled.div`
    display: grid;
    padding-top: 2.4rem;
    grid-template-columns: 1fr 2fr;
    @media ${mediaQuery.styledMobile} {
        grid-template-columns: 16rem 1fr;
    }
`

export const BulletContainer = styled.ul`
    display: grid;
    gap: 1rem;
    padding-top: 4rem;
    @media ${mediaQuery.styledMobile} {
        gap: 2rem;
    }
`

export const BulletLi = styled.li`
    font-size: 1.4rem;
    margin-left: 1rem;
    line-height: 160%;
    @media ${mediaQuery.styledMobile} {
        gap: 2rem;
        font-size: 1.75rem;
    }
`

export const FlexCenter = styled.div`
    display: flex;
    justify-content: center;
`

export const HowToReportContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(45rem, 1fr));
    gap: 2rem;
    padding: 4rem 0;
    @media ${mediaQuery.styledMobile} {
        grid-template-columns: 1fr;
        padding: 3rem 0;
    }
`