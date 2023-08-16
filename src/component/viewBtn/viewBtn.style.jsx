import styled from "styled-components";
import { AnimationChoice } from "../../animation/keyframes.style";

export const ViewContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    width: 10rem;
    ${AnimationChoice};
`