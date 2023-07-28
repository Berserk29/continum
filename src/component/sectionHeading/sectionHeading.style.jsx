import styled, {css} from "styled-components";
import { motion } from "framer-motion";

const flexCss = css`
    display: flex;
    flex-direction: column;
`

export const HeadingSection = styled(motion.div)`
    ${flexCss};
    gap: 6.4rem;
    align-items:  ${props => props.alignitems || 'center'};
    text-align: ${props => props.alignitems || 'center'};
`

export const TextSection = styled.div`
    ${flexCss};
    align-items: ${props => props.alignitems || 'center'};
    gap: 3rem;
`

export const HeadingContainer = styled.div`
    ${flexCss};
    gap: 1.6rem;
`

export const TextContainer = styled.div`
    max-width: ${props => props.maxwidth};
`
