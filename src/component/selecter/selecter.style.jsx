import styled, {keyframes} from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

// TODO ANIMATION BUG WHEN USING FOR THE FIRST TW0 TIME, OTHER COMPONENT ON THE PAGE SHAKE..... 

const slideInAnimation = keyframes`
  from { transform: translateY(-100%);}
  to { transform: translateY(0);}
`;

const slideOutAnimation = keyframes`
    from { transform: translateY(0%);}
    to { transform: translateY(-100%);} 
`


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: ${props => props.width?.[0] || '18rem'};
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
    height: 2.4rem;
`

export const LowerSection = styled.div`
    /* INFO POSITION ABSOLUTE --> NOT PUSHING THE PADDING OF OTHER COMPONENT */
    position: absolute;
    top: 5rem;
    left: 0;
    width: 100%;
    height: auto;
    overflow: hidden;
    border-top: 2px solid var(--color-050);
`

export const DropSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    cursor: pointer;
    width: 100%;
    background-color: ${ props => props.isFooter ? 'var(--color-secondary)' : 'var(--color-050)'};
    border: ${ props => props.isFooter ? '2px solid var(--color-050)': 'none'};
    border-top: none;
    padding: 2.5rem 1.6rem;
    animation: ${({ isOpen }) => isOpen ? slideInAnimation : slideOutAnimation} .5s ease-in-out forwards;
    /* INFO MAKE SURE THE DROPSECTION IS HIDDEN WHEN REFRESH THE PAGE */
    opacity: ${props => props.clickOne ? 1 : 0};
    text-align: start;
`