import styled from "styled-components";
import { motion } from "framer-motion";
import mediaQuery from "../../helper/mediaQuery";

export const StoryContainerItems = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 0;
    border-top: 1.5px solid var(--color-primary);
    :last-child {
        border-bottom: 1.5px solid var(--color-primary);
    }
    @media ${mediaQuery.styledTablet} {
        padding: 2.4rem 0;
    }
    @media ${mediaQuery.styledMobile} {
        padding: 2rem 0;
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    @media ${mediaQuery.styledMobile} {
        gap: 0.5rem;
    }
`

export const TextCss = styled.div`
    display: -webkit-box;
    -webkit-line-clamp: ${props => props.hide ? 1 : 2};
    -webkit-box-orient: vertical;
    overflow: hidden;  
`


export const ArrowBtn = styled.img`
    cursor: pointer;
    height: 4.6rem;
    width: 4.6rem;
    margin-left: 4rem;
    transition: filter .3s;
    :hover{
        filter: var(--filter-grey);
    }
`