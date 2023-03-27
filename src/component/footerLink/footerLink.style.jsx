import styled from "styled-components";

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.2rem;
`

export const FooterLinkCss = styled.a`
    color: var(--color-grey);
    transition: color .2s;
    cursor: pointer;
        &:hover{
            color: var(--color-primary);
        }
`