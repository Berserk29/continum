import { ArrowBtn, StoryContainerItems, StoryHeading, StoryText, ClockIcon, StoryTime, TextContainer } from "./storyNews.style";
import { useNavigate } from "react-router-dom";

import iconClock from '../../assets/icon/icon_clock.png'
import arrowBtn from '../../assets/icon/button_arrow.png'

const StoryNews = ({link, story, animate, variants}) => {
    const navigate = useNavigate()
    const {heading, text, time} = story;

    const viewHandler = () => navigate(link)

    return (
        <StoryContainerItems animate={animate} variants={variants} initial='hidden' onClick={viewHandler}>
            <TextContainer>
                <StoryHeading>{heading}</StoryHeading>
                <StoryText>{text}</StoryText>
                <StoryTime><ClockIcon src={iconClock}/>{time}</StoryTime>
            </TextContainer>
            <ArrowBtn src={arrowBtn}/>
        </StoryContainerItems>
    )
}

export default StoryNews;