import styled from "styled-components";
import { motion } from "framer-motion";
import mediaQuery from '../../helper/mediaQuery'

// To Put motion into styled component !!! styled(motion.div) or styled(motion.h4) ... etc

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 3.2rem;
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
    color: var(--color-black);
    font-size: 2.6rem;
    font-weight: 700;
    line-height: 140%;
    @media ${mediaQuery.styledTablet} {
        font-size: 1.6rem;
    }
    @media ${mediaQuery.styledMobile} {
        font-size: 2rem;
    }

`

export const CardText = styled.p`
    color: var(--color-black);
    font-size: 1.6rem;
    line-height: 160%;
    @media ${mediaQuery.styledTablet} {
        line-height: 1.7rem;
    }
    @media ${mediaQuery.styledMobile} {
        font-size: 1.2rem;
    }
`