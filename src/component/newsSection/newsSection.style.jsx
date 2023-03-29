import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const NewsContainer = styled.div`
    display: flex;
    height: 55rem;
    @media ${mediaQuery.styledTablet} {
        flex-direction: column;
        height: 65rem;
    }
`

export const ImgContainer = styled.div`
    background-size: cover;
    background-position: center;
    width: 35%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${mediaQuery.styledTablet} {
        width: 100%;
        justify-content: start;
        padding-left: 3rem;
        margin-top: 3rem;
    }
`

export const ImgContainerItems = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 3rem;
`

export const StoryContainer = styled.div`
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    padding: 0 1rem;
    @media ${mediaQuery.styledTablet} {
        width: 100%;
        padding: 0 3rem;
        margin-bottom: 5rem;
    }
`


