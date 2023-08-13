import styled from "styled-components";

export const CircleCss = styled.div`
    width: 7px;
    height: 7px;
    border-radius: 50%;
    transition: all .8s;
    border: ${props => props.active ? `1.2px solid ${props.activeColor}` : `1.2px solid ${props.color}`};
    background-color: ${props => props.active && props.activeColor};
`
