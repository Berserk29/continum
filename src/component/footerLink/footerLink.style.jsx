import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
`

export const Heading = styled.h3`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-white);
    margin-bottom: 8px;
    @media ${mediaQuery.styledTablet} {
        font-size: 1.4rem;
        cursor: pointer;
        :hover{
            color: var(--color-primary);
        }
    }
`

export const Link = styled.a`
    font-size: 1.4rem;
    color: var(--color-grey);
    transition: color .2s;
    cursor: pointer;
        &:hover{
            color: var(--color-primary);
        }
`