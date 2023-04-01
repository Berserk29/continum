import styled from "styled-components";
import { motion } from "framer-motion";

export const HeadingSection = styled(motion.h3)`
    color: ${props => props.color};
    letter-spacing: -2%;
    font-size: 4rem;
    line-height: 120%;
    margin-bottom: 3.2rem;
`
