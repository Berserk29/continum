import styled from "styled-components";
import { motion } from "framer-motion";
import mediaQuery from '../../helper/mediaQuery'

// To Put motion into styled component !!! styled(motion.div) or styled(motion.h4) ... etc

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 3rem;
    width: 100%;
    height: 35rem;
    align-items: center;
    @media ${mediaQuery.styledTablet} {
        gap: 2.5rem;
        height: auto;
        width: 100%;
    }
    @media ${mediaQuery.styledMobile} {
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
        width: 100%;
    }
`

export const TextContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 45%;
    gap: 2rem;
    @media ${mediaQuery.styledTablet} {
        width: 50%;
        gap: 1.5rem;
    }
    @media ${mediaQuery.styledMobile} {
        width: 90%;
        align-items: center;
        text-align: center;
    }
`

export const CardHeading = styled.h4`
    font-size: 1.8rem;
    font-weight: 700;
    @media ${mediaQuery.styledTablet} {
        font-size: 1.6rem;
    }
    @media ${mediaQuery.styledMobile} {
        font-size: 2rem;
    }

`

export const CardText = styled.p`
    line-height: 2rem;
    font-weight: 500;
    @media ${mediaQuery.styledTablet} {
        line-height: 1.7rem;
    }
    @media ${mediaQuery.styledMobile} {
        font-size: 1.2rem;
    }
`