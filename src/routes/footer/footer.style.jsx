import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const FooterContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: var(--color-black);
    gap: 8rem;
    align-items: center;
    @media ${mediaQuery.styledTablet} {
        justify-content: space-between;
        gap: 0;
    }
`

export const FooterLinksContainer = styled.div`
    display: flex;
    gap: 8rem;

    @media ${mediaQuery.styledTablet} {
        flex-direction: column;
        align-items: center;
        gap: 0;
    }

`

export const CategoryContainer = styled.div`
    margin-top: 4rem;
    @media ${mediaQuery.styledTablet}{
        margin-top: 1.5rem;
    }
`

export const LowerPartContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    padding: 4rem 0;
    border-top: 1px solid rgba(102, 102, 102, .7);
    @media ${mediaQuery.styledTablet} {
        border-top: none;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
    }
`

export const Text = styled.p`
    color: var(--color-grey-light);
    font-size: 1.3rem;
    line-height: 1.6rem;
    opacity: .8;
`

export const TextLine2 = styled(Text)`
    line-height: 2rem;
    @media ${mediaQuery.styledTablet}{
        text-align: center;
    }
`

export const IconContainer = styled.div`
    display: flex;
    justify-content: end;
    margin-top: 1.5rem;
    @media ${mediaQuery.styledTablet}{
        justify-content: center;
    }
`

export const FooterIcon = styled.img`
    cursor: pointer;
    width: 2.3rem;
    margin-left: 1rem;
`