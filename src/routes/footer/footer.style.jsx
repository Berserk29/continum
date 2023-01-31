import styled from "styled-components";

export const FooterContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: var(--color-black);
    gap: 8rem;
    align-items: center;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    gap: 7rem;
`

export const CategoryContainer = styled.div`
    margin-top: 4rem;
`

export const ContinumLogo = styled.img`
    width: 10rem;
`

export const LowerPartContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    padding: 4rem 0;
    border-top: 1px solid rgba(102, 102, 102, .7);
`

export const Text = styled.p`
    color: var(--color-grey-light);
    line-height: 1.6rem;
    opacity: .8;
`

export const TextLine2 = styled(Text)`
    line-height: 2rem;
`

export const IconContainer = styled.div`
    display: flex;
    justify-content: end;
    margin-top: 1.5rem;
`

export const FooterIcon = styled.img`
    cursor: pointer;
    width: 2rem;
    margin-left: 1rem;
`