import styled from "styled-components";
import { AnimationChoice } from "../../animation/animation.style";
import mediaQuery from "../../helper/mediaQuery";

export const Section = styled.div`
    position: relative;
    height: 100vh;
    min-height: 76rem;
    width: 100%;
    background-color: black;
`

export const AniContainer = styled.div`
    ${AnimationChoice}
`

export const SectionImg = styled.div`
    opacity: ${props => props.opacity || 0};
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    transition: opacity .8s;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
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
    top: 22%;
    margin-left: 14.4rem;
    display: flex;
    flex-direction: column;
    gap: 6.46rem;
    justify-content: center;
    @media ${mediaQuery.styledTablet} {
        margin-left: 0;
        padding: 0 8rem;
        gap: 5rem;
    }
    @media ${mediaQuery.styledMobile} {
        padding: 0 2rem;
        top: 23%;
    }
`

export const ItemContainer = styled.ul`
    display: flex;
    gap: 1.6rem;
    justify-content: start;
    list-style-position: inside;
    @media ${mediaQuery.styledMobile} {
        gap: 1rem;
    }
`

export const CarouselItem = styled.li`
    color: var(--color-white-opa60);
    font-size: 1.6rem;
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

export const CarouselText = styled.div`
    margin: 2.4rem 0 1.425rem 0;
    max-width: 580px;
    ${AnimationChoice}
`

export const CarouselBtn = styled.a`
    font-family: 'Noto Sans';
    color: var(--color-white-opa60);
    font-weight: 700;
    font-size: 1.8rem;
    transition: color .2s;
    cursor: pointer;
    &:hover{
        color: var(--color-primary);
    }
    @media ${mediaQuery.styledTablet} {
        font-size: 1.6rem;
    }
`

export const CarouselBtnActive = styled(CarouselBtn)`
    color: var(--color-primary);
    cursor: default;
`