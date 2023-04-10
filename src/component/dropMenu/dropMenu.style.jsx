import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const DropMenuContainer = styled.div`
    display: flex;
    position: absolute;
    height: 42rem;
    width: 100%;
    z-index: 150;
    background: linear-gradient(90deg, var(--color-white) 50%, var(--color-grey-light-3) 50%);
    @media ${mediaQuery.styledMobile} {
        height: 30rem;
    }
`

export const DropMenuUl = styled.ul`
    height: 100%;
    width: 50%;
    display: flex;
    padding: 3rem 3rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    list-style: none;
`

export const MenuLi = styled.li`
    cursor: pointer;
    font-weight: 500;
    font-size: 2rem;
    transition: color .25s;
    text-align: start;
    &:hover {
        color: var(--color-primary);
        font-weight: 700;
    }
    &.active {
        color: var(--color-primary);
        font-weight: 700;
    }
    @media ${mediaQuery.styledMobile} {
        font-size: 1.8rem;
    }
`

export const MenuContainer = styled.div`
    width: 100%;
    justify-content: space-between;
    display: flex;
    align-items: center;
`


export const MenuLink = styled.li`
    position: relative;
    cursor: pointer;
    font-weight: 500;
    font-size: 1.8rem;
    text-align: start;
    color: var(--color-grey);
    transition: color .3s;
    &:hover {
        color: var(--color-black);
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
`
