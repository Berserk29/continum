import styled, {css} from "styled-components";
import { comingBack, AnimationChoice } from "../../animation/animation.style";
import mediaQuery from "../../helper/mediaQuery";

export const Section = styled.div`
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    transition: background-image .8s , background-color .8s;
    position: relative;
    height: 76rem;
    @media ${mediaQuery.styledTablet} {
    background-color: #00000030;
    background-blend-mode: multiply;
    }
    @media ${mediaQuery.styledMobile} {
    background-color: #00000065;
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
        padding-left: 8rem;
    }
    @media ${mediaQuery.styledMobile} {
        padding: 0 3rem;
        top: 23%;
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
    @media ${mediaQuery.styledMobile}{
        list-style: outside;
        margin-left: 1rem;
        &:first-child{
            margin: 0;
        }
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
    @media ${mediaQuery.styledMobile} {
        font-size: 3.25rem 
    }
`

export const LowerHeading = styled(UpperHeading)`
`

export const CarouselText = styled.p`
    color: var(--color-grey-light);
    font-size: 1.4rem;
    line-height: 160%;
    max-width: 500px;
    margin-bottom: 6.4rem;
    ${AnimationChoice}
    @media ${mediaQuery.styledTablet} {
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
`

export const CarouselBtnActive = styled(CarouselBtn)`
    opacity: 1;
    font-weight: 700;
    color: var(--color-primary);
`