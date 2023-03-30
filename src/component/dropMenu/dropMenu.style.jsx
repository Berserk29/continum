import styled from "styled-components";
import { Link } from "react-router-dom";

export const DropMenuContainer = styled.div`
    /* display: flex; */
    /* justify-content: space-around; */
    /* align-items: center; */
    /* transition: background-color .25s; */
    position: absolute;
    height: 30vh;
    width: 100%;
    z-index: 150;
    background-color: red;
`

export const DropMenuUl = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
`

export const MenuLink = styled(Link)`
    color: var(--color-white);
    font-weight: 500;
    font-size: 1.1rem;
    text-decoration: none;
    transition: color .25s;
    padding: 3rem 2rem;
`

export const MenuLi = styled.li`
    &:hover ${MenuLink} {
        color: var(--color-primary);
    }
`