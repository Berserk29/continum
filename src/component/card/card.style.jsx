import styled from "styled-components";
import { motion } from "framer-motion";
import mediaQuery from '../../helper/mediaQuery'

// To Put motion into styled component !!! styled(motion.div) or styled(motion.h4) ... etc

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 8rem;
    width: 100%;
    max-width: 120rem;
    height: 51rem;
    align-items: center;
    @media ${mediaQuery.styledTablet} {
        gap: 2.5rem;
        height: auto;
        width: 100%;
    }
    @media ${mediaQuery.styledMobile} {
        gap: 3rem;
        flex-direction: column;
        height: auto;
    }
`

export const AboutImage = styled(motion.img)`
    height: 100%;
    @media ${mediaQuery.styledTablet} {
        height: auto;
        width: 40%;
    }
    @media ${mediaQuery.styledMobile} {
        object-fit: cover;
        aspect-ratio: 1.17/1;
        max-width: 100%;
        max-height: 280px;
        width: auto;
    }
`

export const TextContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 45%;
    gap: 2rem;
    font-size: 1.6rem;
    @media ${mediaQuery.styledTablet} {
        width: 50%;
        gap: 1.5rem;
    }
    @media ${mediaQuery.styledMobile} {
        width: 100%;
        align-items: center;
        text-align: center;
    }
`