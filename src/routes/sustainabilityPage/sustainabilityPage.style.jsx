import styled from "styled-components"

export const SubstainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 2rem 3rem 2rem;
    gap: 2rem
`

export const TextCss = styled.div`
    font-weight: 500;
    text-align: center;
    margin: 1rem 2rem 4rem 2rem;
    line-height: 1.5rem;
    max-width: 80rem;
`

export const EthicalContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
`

export const Container = styled.div`
    padding: 3rem 4rem 3rem 4rem;
`

export const TableContainer = styled.div`
    display: grid;
    padding-top: 2rem;
    grid-template-columns: 400px 1fr;
`

export const BulletContainer = styled.ul`
    display: grid;
    gap: 1rem;
    padding: 1.5rem 0 0 1rem;
`

export const BulletLi = styled.li`
    margin-left: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
`

export const FlexCenter = styled.div`
    display: flex;
    justify-content: center;
`

export const HowToReportContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    flex: 1500px 0 1;
    gap: 20px;
    padding: 3rem 0;
`