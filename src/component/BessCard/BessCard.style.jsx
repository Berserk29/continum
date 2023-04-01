import styled from "styled-components";

// TODO RESIZE BESS COMPONENT

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--color-white);
    align-items: center;
    gap: 1.5rem;
    padding:2rem 1rem;
`

export const ImageBusiness = styled.img`
    height: 3.5rem;
    width: 3.5rem;
`

export const HeadingCard = styled.h5`
    font-size: 1.8rem;
    text-align: center;
    height: 4rem;
`

export const BulletContainer = styled.ul`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .7rem;
    border-top: 1px solid var(--color-grey-light);
    padding: 1rem 0;
`

export const BulletLi = styled.li`
    margin-left: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
`

