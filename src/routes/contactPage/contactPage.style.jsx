import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 2rem 3rem 2rem;
    gap: 2rem
`

export const TableContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, max-content) 1fr;
`