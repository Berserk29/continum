import styled from "styled-components";
import { motion } from "framer-motion";

export const StoryContainerItems = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    padding: 2rem 2rem 0 2rem;
    border-top: 2px solid rgba(255, 116, 26, .4);
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
`

export const StoryHeading = styled.h3`
    font-size: 1.4rem;
`

export const StoryText = styled.p`
    color: var(--color-grey);
`

export const ClockIcon = styled.img`
    width: .7rem;
    height: .7rem;
`

export const StoryTime = styled.p`
    margin-top: 1rem;
    font-size: .9rem;
    color: var(--color-grey-light);
`

export const ArrowBtn = styled.img`
    cursor: pointer;
    height: 2.5rem;
    width: 2.5rem;
`