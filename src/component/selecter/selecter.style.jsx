import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";
import { slideInAnimation, slideOutAnimation } from "../../animation/keyframes.style";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: ${props => props.width?.[0] || '18rem'};
    height: 100%;
    position: relative;
    @media ${mediaQuery.styledTablet} {
        width: ${props => props.width?.[1] || '18rem'};
    }
`

export const UpperSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 0;
    cursor: pointer;
`

export const IconCss = styled.img`
    width: 2.4rem;
    height: 100%;
    @media ${mediaQuery.styledTablet} {
        width: 2rem;
    }
`

/* INFO POSITION ABSOLUTE --> NOT PUSHING THE PADDING OF OTHER COMPONENT */
export const LowerSection = styled.div`
    position: absolute;
    top: 4.5rem;
    left: 0;
    width: 100%;
    height: auto;
    overflow: hidden;
    border-top: 2px solid var(--color-050);
    z-index: 2;
    @media ${mediaQuery.styledTablet} {
        border-top: ${props => props.isFooter ? '1.5px solid var(--color-white-opa40)' : '2px solid var(--color-050)'};
        top: 4.2rem;
    }
`

/* INFO OPACITY TO MAKE SURE THE DROPSECTION IS HIDDEN WHEN REFRESHING THE PAGE */
export const DropSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: .6rem;
    cursor: pointer;
    width: 100%;
    height: 100%;
    background-color: ${ props => props.isFooter ? 'var(--color-secondary)' : 'var(--color-050)'};
    border: ${ props => props.isFooter ? '2px solid var(--color-050)': 'none'};
    border-top: none;
    padding: 0 1.6rem;
    text-align: start;
    animation: ${({ isOpen }) => isOpen ? slideInAnimation : slideOutAnimation} .5s ease-in-out forwards;
    opacity: ${props => props.clickOne ? 1 : 0};
    @media ${mediaQuery.styledTablet} {
        border: ${ props => props.isFooter ? '1.5px solid var(--color-white-opa40)': 'none'};
        border-top: none;
    }
`

export const DropContainer = styled.div`
    border-bottom: ${props => props.isFirst ? `1.2px solid ${props.color}` : 'none'};
    padding: 1.2rem 0;
    @media ${mediaQuery.styledTablet} {
        border-bottom: ${props => props.isFirst ? `1px solid ${props.color}` : 'none'};
    }
` 