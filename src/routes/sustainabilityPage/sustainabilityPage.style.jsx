import styled from "styled-components"
import mediaQuery from "../../helper/mediaQuery"

export const SubstainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 4rem 4rem 4rem;
    gap: 8rem
`

export const TextCss = styled.div`
    color: var(--color-black);
    text-align: center;
    margin: 1rem 2rem 0 2rem;
    line-height: 160%;
    font-size: 1.6rem;
    max-width: 80rem;
`

export const EthicalContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    flex: 142rem 0 1;
    @media ${mediaQuery.styledTablet} {
        grid-template-columns: 1fr;
    }
`

export const Container = styled.div`
    padding: 4rem 4rem 4rem 4rem;
    flex: 150rem 0 1;
`

export const TableContainer = styled.div`
    display: grid;
    padding-top: 2.4rem;
    grid-template-columns: 35rem 1fr;
`

export const BulletContainer = styled.ul`
    display: grid;
    gap: 1rem;
    padding-top: 4rem;
`

export const BulletLi = styled.li`
    font-size: 1.4rem;
    margin-left: 1rem;
    line-height: 160%;
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
`