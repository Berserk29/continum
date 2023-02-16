import { ArrowBtn, StoryContainerItems, StoryHeading, StoryText, ClockIcon, StoryTime, TextContainer } from "./storyNews.style";

import iconClock from '../../assets/icon/icon_clock.png'
import arrowBtn from '../../assets/icon/button_arrow.png'

const StoryNews = ({story}) => {
    const {heading, text, time} = story;

    return (
        <StoryContainerItems>
            <TextContainer>
                <StoryHeading>{heading}</StoryHeading>
                <StoryText>{text}</StoryText>
                <StoryTime><ClockIcon src={iconClock}/> {time}</StoryTime>
            </TextContainer>
            <ArrowBtn src={arrowBtn}/>
        </StoryContainerItems>
    )
}

export default StoryNews;