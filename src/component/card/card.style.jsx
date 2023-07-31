import styled from "styled-components";
import { motion } from "framer-motion";
import mediaQuery from '../../helper/mediaQuery'

// To Put motion into styled component !!! styled(motion.div) or styled(motion.h4) ... etc

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: ${props => props.imagefirst ? 'row' : 'row-reverse'};
    width: 100%;
    align-items: center;
    gap: 8rem;
    max-width: 93.2rem;
    height: 41rem;
    /* max-width: 100rem;
    height: 45rem;
    gap: 10rem; */
    @media ${mediaQuery.styledTablet} {
        gap: 4rem;
        flex-direction: column;
        height: auto;
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
        object-fit: cover;
        max-width: 100%;
        max-height: 38.1rem;
        width: auto;
    }
`

export const TextContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 45%;
    gap: 2.4rem;
    @media ${mediaQuery.styledTablet} {
        text-align: center;
        width: 100%;
        max-width: 70.4rem;
    }
`