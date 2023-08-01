import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--color-050);
    align-items: center;
    gap: 1.6rem;
    padding: 2.4rem 1rem;
`

export const ImageBusiness = styled.img`
    height: 5.4rem;
    width: 5.4rem;
`

export const HeadingCard = styled.h5`
    color: var(--color-secondary);
    font-size: 1.8rem;
    text-align: center;
    height: 6rem;
    max-width: 25rem;
    @media ${mediaQuery.styledMobile}{
        font-size: 2.25rem;
        max-width: 31.25rem;
    }
`

export const BulletContainer = styled.ul`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .7rem;
    border-top: 1px solid var(--color-200);
    padding: 2.4rem 0 0 0;
`

export const BulletLi = styled.li`
    color: var(--color-400);
    font-size: 1.4rem;
    margin-left: 1rem;
    line-height: 160%;
    font-weight: 400;
    @media ${mediaQuery.styledMobile}{
        font-size: 1.75rem;
    }
`

