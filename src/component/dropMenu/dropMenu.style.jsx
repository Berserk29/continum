import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const DropMenuContainer = styled.div`
    display: flex;
    position: absolute;
    height: 42rem;
    width: 100%;
    z-index: 150;
    background: linear-gradient(90deg, var(--color-secondary) 33%, var(--color-050) 33%);
    @media ${mediaQuery.styledTablet} {
        background: linear-gradient(90deg, var(--color-050) 50%, var(--color-200) 50%);
        height: 42rem;
    }
`

export const DropMenuUl = styled.ul`
    height: 100%;
    width: 33.33%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    list-style: none;
    padding: ${props => props.padding || '4rem'};
    gap: ${props => props.gap?.[0] || '2rem'};
    @media ${mediaQuery.styledTablet} {
        width: 50%;
    }
    @media ${mediaQuery.styledMobile} {
        padding: 2.8rem 1.6rem;
    gap: ${props => props.gap?.[1]};
    }
`

export const SectionLine = styled.div`
    width: 100%;
    height: 100%;
    border-left: 1.2px solid var(--color-300);
`

export const FlexContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`

export const Arrow = styled.img`
    height: 3.2rem;
    width: 3.2rem;
    margin-right: 2.2rem;
`

export const MenuLink = styled.li`
    font-family: 'Noto Sans';
    position: relative;
    width: auto;
    cursor: pointer;
    font-weight: 400;
    font-size: 1.8rem;
    text-align: start;
    color: var(--color-black-opa80);
    transition: color .3s;
    &:hover {
        color: var(--color-secondary);
        &::before{
            transform: scaleX(1);
        }
    }
    &::before {
        content: '';
        opacity: .2;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 30%;
        background-color: red;
        transition: transform 0.5s;
        transform-origin: 0 0;
        transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
        transform: scaleX(0);
    }
    @media ${mediaQuery.styledMobile} {
        font-size: 1.4rem;
    }
`
