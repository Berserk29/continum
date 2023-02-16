import styled from "styled-components"

export const SubstainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 2rem 5rem 2rem;
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
    padding: 0 4rem 5rem 4rem;
`

/* export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(autofit, );
` */

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