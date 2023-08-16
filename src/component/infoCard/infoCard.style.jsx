import styled from "styled-components";
import { motion } from "framer-motion";
import mediaQuery from "../../helper/mediaQuery";

export const VerticalContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.color || 'var(--color-200)'};
    align-items: center;
    text-align: center;
    gap: ${props => props.gap?.[0] || '3rem'};
    padding: ${props => props.padding?.[0] || '6.4rem'};
    @media ${mediaQuery.styledTablet} {
        gap: ${props => props.gap?.[1] || '2.4rem'};
        padding: ${props => props.padding?.[1] || '4.8rem 4rem'};
    }
    @media ${mediaQuery.styledMobile} {
        gap: ${props => props.gap?.[2] || '2.4rem'};
        padding: ${props => props.padding?.[2] || '4rem 2rem'};
    }
`

export const CardImg = styled.img`
    width: 8rem;
`

export const HeadingContainer= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    @media ${mediaQuery.styledTablet} {
        gap: .8rem;
    }
`

export const TextContainer = styled.div`
    padding-top: ${props => props.padding?.[0] || '3rem'};
    border-top: 1px solid var(--color-black-opa20);
    @media ${mediaQuery.styledTablet} {
        padding-top: ${props => props.padding?.[1] || '2.4rem'};
    }
    @media ${mediaQuery.styledMobile} {
        padding-top: ${props => props.padding?.[2] || '2.4rem'};
    }
`

// INFO Horizontal container
export const HorizontalContainer = styled(motion.div)`
    display: flex;
    gap: 3.2rem;
    padding: 4.4rem 5.3rem 4.4rem 3.2rem;
    align-items: center;
    background-color: ${props => props.color || 'var(--color-200)'};
    @media ${mediaQuery.styledTablet} {
        padding: 3.8rem 3.2rem;
        gap: 2.4rem;
    }
    @media ${mediaQuery.styledMobile} {
        gap: 1.6rem;
        padding:  2rem 1.6rem;
    }
`

export const TextSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    text-align: start;
    @media ${mediaQuery.styledTablet} {
        gap: 0;
    }
    @media ${mediaQuery.styledMobile} {
        gap: .5rem;
    }
`

export const CardImgHorizon = styled.img`
    width: 8rem;
    @media ${mediaQuery.styledMobile} {
        width: 6.4rem;
    }
`