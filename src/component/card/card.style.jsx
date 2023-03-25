import styled from "styled-components";
import { motion } from "framer-motion";

// To Put motion into styled component!!! styled(motion.div)

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 3rem;
    width: 100%;
    height: 35rem;
    align-items: center;
`

export const AboutImage = styled(motion.img)`
    height: 100%;
`

export const TextContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 45%;
    gap: 2rem;
`

export const CardHeading = styled.h4`
    font-size: 1.8rem;
    font-weight: 700;
`

export const CardText = styled.p`
    line-height: 2rem;
    font-weight: 500;
`