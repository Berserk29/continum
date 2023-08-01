import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";


// TESTING
export const Testing = styled.div`
    background-color: blue;
    height: 36px;
    width: 243px;
    @media ${mediaQuery.styledTablet} {
        width: 100%;
    }
`

export const FooterContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: var(--color-secondary);
`

export const UpperPartContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8rem 4rem 8rem 4rem;
    @media ${mediaQuery.styledTablet} {
        padding: 4rem 3.2rem 6.4rem 3.2rem;
        flex-direction: column;
        gap: 4rem;
    }
    @media ${mediaQuery.styledMobile} {
        padding: 4rem 2rem 0rem 2rem;
        flex-direction: column;
        gap: 3.2rem;
    }
`

export const CategoryContainer = styled.div`
    display: flex;
    gap: 4.8rem;
    @media ${mediaQuery.styledTablet} {
        gap: 0;
        justify-content: space-between;
    }
    @media ${mediaQuery.styledMobile} {
        gap: 2.4rem;
        flex-direction: column;
    }
`

export const LowerPartContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 3.2rem 4rem;
    border-top: 1px solid rgba(102, 102, 102, .7);
    @media ${mediaQuery.styledMobile} {
        border-top: none;
        padding: 3.2rem 2rem 5.6rem 2rem;
        flex-direction: column-reverse;
        align-items: flex-start;
    }
`
// TODO WILL PROBABLY DELETE
export const Text = styled.p`
    color: var(--color-200);
    font-size: 1.3rem;
    line-height: 1.6rem;
    opacity: .8;
`

// TODO WILL PROBABLY DELETE
export const TextLine2 = styled(Text)`
    line-height: 2rem;
`

export const IconContainer = styled.div`
    display: flex;
    gap: 1.2rem;
    margin-left: 2rem;
    @media ${mediaQuery.styledMobile}{
        margin-left: 0;
    }
`

export const FooterIcon = styled.img`
    width: 3.2rem;
`