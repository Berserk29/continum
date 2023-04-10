import styled from "styled-components";
import { motion } from "framer-motion";
import mediaQuery from "../../helper/mediaQuery";

export const StoryContainerItems = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.45rem 2.4rem 0 2.4rem;
    border-top: 2px solid rgba(255, 116, 26, .4);
    @media ${mediaQuery.styledMobile} {
        padding: 2.45rem 0 0 0;
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`

export const StoryHeading = styled.h3`
    color: var(--color-black);
    font-size: 2.2rem;
`

export const StoryText = styled.p`
    color: var(--color-grey);
    font-size: 1.4rem;
`

export const ClockIcon = styled.img`
    width: .7rem;
    height: .7rem;
    margin-right: 8px;
    @media ${mediaQuery.styledMobile} {
        width: .875rem;
        height: .875rem;
    }
`

export const StoryTime = styled.p`
    margin-top: 1.2rem;
    font-size: 1.3rem;
    color: var(--color-grey-light);
`

export const ArrowBtn = styled.img`
    cursor: pointer;
    height: 4.6rem;
    width: 4.6rem;
`