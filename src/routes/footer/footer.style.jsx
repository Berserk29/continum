import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";
import { detect } from "detect-browser";
import { SnapCss } from "../../component/header/header.style";
const browser = detect();

export const FooterContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--color-secondary);
`

export const FooterHome = styled(FooterContainer)`
    ${SnapCss}
    @media ${mediaQuery.styledMobile} {
        padding-bottom: 4rem;   
    }
`

export const UpperPartContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 9.6rem 8.8rem 8.4rem 8.8rem;
    
    @media ${mediaQuery.styledTablet} {
        flex-wrap: nowrap;
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
    gap: 8rem;
    margin-right: 2rem;
    margin-bottom: 6rem;
    @media ${mediaQuery.styledTablet} {
        margin-right: 0;
        margin-bottom: 0;
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
    border-top: 1.2px solid var(--color-white-opa60);
    padding: 4.4rem 8.8rem;
    @media ${mediaQuery.styledTablet} {
        border-top: 1px solid var(--color-white-opa40);
        padding: 2.8rem 3.2rem;
    }
    @media ${mediaQuery.styledMobile} {
        border-top: none;
        padding: 3.2rem 2rem 4rem 2rem;
        flex-direction: column-reverse;
        align-items: flex-start;
        gap: 1.6rem;
    }
`

export const IconContainer = styled.div`
    display: flex;
    gap: 1.45rem;
    @media ${mediaQuery.styledTablet} {
        gap: 1.2rem;
    }
`

export const FooterIcon = styled.img`
    width: 3.85rem;
    height: 3.85rem;
    @media ${mediaQuery.styledTablet} {
        width: 3.2rem;
        height: 3.2rem;
    }
`

export const FlexCss = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.9rem;
    @media ${mediaQuery.styledTablet} {
        gap: 1.55rem;
    }
    @media ${mediaQuery.styledMobile} {
        gap: .5rem;
    }
`