import styled from "styled-components";
import { SnapCss } from "../header/header.style";

export const RecruitmentContainer = styled.div`
    position: relative;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    height: 100vh;
    min-height: 76rem;
    gap: 3.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 2rem;
    ${SnapCss}
`