import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

// TODO RESIZE BESS COMPONENT

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--color-white);
    align-items: center;
    gap: 1.6rem;
    padding: 2.4rem 1rem;
`

export const ImageBusiness = styled.img`
    height: 5.4rem;
    width: 5.4rem;
`

export const HeadingCard = styled.h5`
    color: var(--color-black);
    font-size: 1.8rem;
    text-align: center;
    height: 6rem;
    max-width: 25rem;
`

export const BulletContainer = styled.ul`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .7rem;
    border-top: 1px solid var(--color-grey-light);
    padding: 2.4rem 0 0 0;
`

export const BulletLi = styled.li`
    color: var(--color-grey-dark);
    font-size: 1.4rem;
    margin-left: 1rem;
    line-height: 160%;
    font-weight: 400;
`

