import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const NewsContainer = styled.div`
    display: flex;
    height: 100vh;
    min-height: 80rem;
    @media ${mediaQuery.styledTablet} {
        flex-direction: column;
        justify-content: center;
        gap: 4rem;
        padding: 8rem;
        height: auto;
        min-height: none;
    }
    @media ${mediaQuery.styledMobile} {
        padding: 6.4rem 2rem 8rem 2rem;
    }
`

export const ImgContainer = styled.div`
    background-image: ${props => props.image};
    background-size: cover;
    background-position: center;
    width: 35%;
    position: relative;
    display: flex;
    justify-content: center;
    @media ${mediaQuery.styledTablet} {
        padding-top: 0;
        width: 100%;
        justify-content: start;
    }
`

export const ImgContainerItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3.2rem;
    margin-bottom: 10rem;
    @media ${mediaQuery.styledTablet} {
        margin-bottom: 0;
        gap: 2rem;
        justify-content: start;
    }
`

export const StoryContainer = styled.div`
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 5.6rem;
    @media ${mediaQuery.styledTablet} {
        width: 100%;
        padding: 0;
    }
`


