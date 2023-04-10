import styled, {css} from "styled-components";
import { comingBack, AnimationChoice } from "../../animation/animation.style";
import mediaQuery from "../../helper/mediaQuery";

// TODO MEDIA QUERY 


export const Section = styled.div`
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    transition: background-image .8s , background-color .8s;
    position: relative;
    height: 76rem;
    @media ${mediaQuery.styledMobile} {
    background-color: #00000050;
    background-blend-mode: multiply;
    }
`

export const CarouselContainer = styled.div`
    position: absolute;
    top: 26%;
    margin-left: 13.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media ${mediaQuery.styledTablet} {
        margin-left: 0;
        padding: 0 5rem;
    }
    @media ${mediaQuery.styledTablet} {
        margin-left: 0;
        padding: 0 3rem;
    }
`

export const ItemContainer = styled.ul`
    display: flex;
    gap: 1.8rem;
    margin-bottom: 3.2rem;
    justify-content: start;
    list-style-position: inside;
`

export const CarouselItem = styled.li`
    font-size: 1.6rem;
    color: var(--color-white);
    &:first-child{
        list-style: none;
    }
`

export const HeadingCarousel = styled.h2`
    color: var(--color-white);
    display: flex;
    flex-direction: column;
    gap: .8rem;
    margin-bottom: 2.4rem;
`

export const UpperHeading = styled.span`
    font-weight: 700;
    font-size: 4rem;
    letter-spacing: -2%;
    ${AnimationChoice}
`

export const LowerHeading = styled.span`
    font-weight: 700;
    letter-spacing: -2%;
    font-size: 4rem;
    ${AnimationChoice}
`

export const CarouselText = styled.p`
    color: var(--color-grey-light);
    font-size: 1.4rem;
    line-height: 160%;
    max-width: 500px;
    margin-bottom: 6.4rem;
    ${AnimationChoice}
    @media ${mediaQuery.styledTablet} {
        color: var(--color-grey-light-2);
        font-size: 1.4rem;
        line-height: 2rem;
    }
`

export const animationComing = css`
    animation: ${comingBack} 1.7s;
`

export const CarouselBtn = styled.a`
    color: var(--color-white);
    font-weight: 700;
    opacity: .6;
    font-size: 1.4rem;
    transition: color .2s , opacity .2s;
    cursor: pointer;
    
    &:hover{
        opacity: 1;
        color: var(--color-primary);
    }
    /* TODO TESTING */
    @media ${mediaQuery.styledTablet} {
        color: var(--color-grey-light-2)
    }
`

export const CarouselBtnActive = styled(CarouselBtn)`
    opacity: 1;
    font-weight: 700;
    color: var(--color-primary);
`