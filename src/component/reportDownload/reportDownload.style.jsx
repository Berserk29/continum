import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const Container = styled.div`
    display: flex;
    border-bottom: 1.2px solid var(--color-black-opa20);
    border-top: ${ props => props.isTop ? '1.2px solid var(--color-black-opa20)' : 'none'};
    align-items: center;
    justify-content: space-between;
    padding: 2.35rem 0;
    @media ${mediaQuery.styledTablet} {
        padding: 2.15rem 0;
    }
`

export const IconCss = styled.img`
    width: 3.85rem;
    cursor: pointer;
    @media ${mediaQuery.styledTablet} {
        width: 3.2rem;
    }
`