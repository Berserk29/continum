import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const Container = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: ${props => props.justify || 'flex-start'};
    background-color: ${props => props.bg || 'var(--color-050)'};
    border-bottom: 1.2px solid var(--color-black-opa20);
    padding: 3.15rem 2.1rem;
    @media ${mediaQuery.styledTablet}{
        padding: 2.8rem 1.7rem;
    }
    @media ${mediaQuery.styledMobile}{
        padding: 2.35rem .8rem;
    }
`

export const GreyHeadingContainer = styled(Container)`
    background-color: var(--color-200);
    border-top: 1.2px solid var(--color-black-opa20);
    padding: 2.8rem 1.8rem;
    justify-content: center;
    @media ${mediaQuery.styledTablet}{
        padding: 2.5rem 1.55rem;
    }
    @media ${mediaQuery.styledMobile}{
        padding: 2.05rem .8rem;
    }
`

export const ListContainer = styled(Container)`
    display: grid;
    grid-template-columns: repeat(${props => props.columns || 2}, max-content);
    column-gap: .8rem;
    justify-items: ${props => props.justify || 'flex-start'};
`
    
export const WithoutDot = styled.li`
    list-style: none;
`

export const SubClassContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .6rem;
`