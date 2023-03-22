import styled, {css} from "styled-components";
import { comingRight, comingUp, comingBack, AnimationChoice } from "../../animation/animation.style";

export const Section = styled.div`
    background-size: cover;
    background-position: center;
    transition: all .8s;
    position: relative;
    height: 60rem;
`

export const CarouselContainer = styled.div`
    position: absolute;
    top: 26%;
    margin-left: 12.5rem;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    justify-content: center;
`

export const ItemContainer = styled.ul`
    display: flex;
    gap: 1rem;
    justify-content: start;
`

export const CarouselItem = styled.li`
    margin-right: 16px;
    color: var(--color-white);
    
    &:first-child{
        list-style: none;
    }
`

export const HeadingCarousel = styled.h2`
    color: var(--color-white);
    display: flex;
    flex-direction: column;
    gap: .7rem;
`

export const UpperHeading = styled.span`
    font-weight: 400;
    font-size: 3rem;

    ${AnimationChoice}

    /* animation: ${comingRight} 1s; */
`

export const LowerHeading = styled.span`
    font-weight: 700;
    font-size: 3.2rem;

    ${AnimationChoice}

    /* animation: ${comingUp} 1.5s; */
`

export const CarouselText = styled.p`
    color: var(--color-grey-light);
    font-weight: 500;
    line-height: 1.6rem;
    max-width: 500px;
    
    ${AnimationChoice}
`

export const animationComing = css`
    animation: ${comingBack} 1.7s;
`

export const CarouselBtn = styled.a`
    color: var(--color-grey-light);
    transition: all .2s;
    cursor: pointer;
    
    &:hover{
        color: var(--color-primary);
    }
`

export const CarouselBtnActive = styled(CarouselBtn)`
    font-weight: 700;
    color: var(--color-primary);
`