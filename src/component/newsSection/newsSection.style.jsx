import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const NewsContainer = styled.div`
    display: flex;
    height: 76rem;
    @media ${mediaQuery.styledTablet} {
        flex-direction: column;
        justify-content: center;
        gap: 3rem;
        padding: 8rem 4rem 4rem 5rem;
        height: 86rem;
    }
    @media ${mediaQuery.styledMobile} {
        padding: 4rem 2rem;
        height: 94rem;
    }
`

export const ImgContainer = styled.div`
    background-image: ${props => props.image};
    background-size: cover;
    background-position: center;
    width: 35%;
    display: flex;
    justify-content: center;
    @media ${mediaQuery.styledTablet} {
        width: 100%;
        justify-content: start;
    }
`

export const ImgContainerItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3.2rem;
    @media ${mediaQuery.styledTablet} {
        gap: 2rem;
        justify-content: start;
    }
`

export const StoryContainer = styled.div`
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media ${mediaQuery.styledTablet} {
        width: 100%;
        margin-bottom: auto;
    }
`


