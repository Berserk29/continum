import { ArrowBtn, StoryContainerItems, StoryHeading, StoryText, StoryTime, TextContainer } from "./storyNews.style";

import arrowBtn from '../../assets/icon/button_arrow.png'

const StoryNews = ({story}) => {
    const {heading, text, time} = story;

    return (
        <StoryContainerItems>
            <TextContainer>
                <StoryHeading>{heading}</StoryHeading>
                <StoryText>{text}</StoryText>
                <StoryTime>{time}</StoryTime>
            </TextContainer>
            <ArrowBtn src={arrowBtn}/>
        </StoryContainerItems>
    )
}

export default StoryNews;