import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const NewsContainer = styled.div`
    display: flex;
    height: 76rem;
    @media ${mediaQuery.styledTablet} {
        flex-direction: column;
        height: 76rem;
    }
`

export const ImgContainer = styled.div`
    position: relative;
    background-size: cover;
    background-position: center;
    width: 35%;
    height: 100%;
    display: flex;
    justify-content: center;
    @media ${mediaQuery.styledTablet} {
        width: 100%;
        justify-content: start;
        padding-left: 3rem;
        margin-top: 3rem;
    }
`

export const ImgContainerItems = styled.div`
    position: absolute;
    top: 24%;
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 3.2rem;
`

export const StoryContainer = styled.div`
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.45rem;
    padding: 0 4rem 0 8px;
    @media ${mediaQuery.styledTablet} {
        width: 100%;
        padding: 0 3rem;
        margin-bottom: 5rem;
    }
`


