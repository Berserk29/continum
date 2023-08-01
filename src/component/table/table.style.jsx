import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const WhiteContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--color-050);
    padding: 1.9rem 1.6rem;
    font-size: 1.4rem;
    text-align: start;
    border-top: 1px solid var(--color-200);
    border-bottom: 1px solid var(--color-200);
    @media ${mediaQuery.styledMobile}{
        font-size: 1.75rem;
        padding: 2.125rem 1rem;
    }
`

export const SubjectContainer = styled(WhiteContainer)`
    overflow: hidden;
`

export const ListContainer = styled(WhiteContainer)`
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
`

export const WhiteCenterContainer = styled(WhiteContainer)`
    justify-content: center;
`

export const GreyHeadingContainer = styled(WhiteContainer)`
    background-color: var(--color-300);
    justify-content: center;
    text-align: center;
    font-weight: 700;
`

export const WhiteHeadingContainer = styled(GreyHeadingContainer)`
    background-color: var(--color-050);
`

export const IconImg = styled.img`
    width: 1.2rem;
    height: 1.2rem;
    margin: 0 .9rem;
`

export const WithDot = styled.li`
    line-height: 1.6rem;
    list-style: inside;
`

export const WithoutDot = styled.li`
    line-height: 1.8rem;
    list-style: none;
`

export const SubClassContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
`

export const SubContainer = styled(SubClassContainer)`
    gap: .6rem;
`

export const SubClassHeading = styled.h5`
    font-weight: 700;
    line-height: 140%;
    letter-spacing: -3%;
    font-size: 1.4rem;
    @media ${mediaQuery.styledMobile}{
    font-size: 1.75rem;
    }
`

export const SubClassLi = styled(WithoutDot)`
    font-size: 1.2rem;
    line-height: 140%;
    letter-spacing: -3%;
    @media ${mediaQuery.styledMobile}{
    font-size: 1.5rem;
    }
`

