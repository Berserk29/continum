import styled from "styled-components";
import { motion } from "framer-motion";
import mediaQuery from '../../helper/mediaQuery'

// To Put motion into styled component !!! styled(motion.div) or styled(motion.h4) ... etc

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: ${props => props.imagefirst ? 'row' : 'row-reverse'};
    width: 100%;
    height: auto;
    align-items: center;
    gap: 8rem;
    max-width: 144rem;
    max-height: 62.6rem;

    @media ${mediaQuery.styledTablet} {
        gap: 4rem;
        flex-direction: column;
        max-height: none;
    }
    @media ${mediaQuery.styledMobile} {
        gap: 2.4rem;
        flex-direction: column;
    }
`

export const AboutImage = styled(motion.img)`
    width: 50%;
    height: auto;
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
    height: auto;
    gap: 2.4rem;
    @media ${mediaQuery.styledTablet} {
        text-align: center;
        width: 100%;
        max-width: 70.4rem;
    }
`