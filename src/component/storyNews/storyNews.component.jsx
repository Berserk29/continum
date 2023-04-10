import { 
    ArrowBtn,
    StoryContainerItems,
    StoryHeading,
    StoryText,
    ClockIcon,
    StoryTime,
    TextContainer
} from "./storyNews.style";

import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

import iconClock from '../../assets/icon/icon_clock.png'
import arrowBtn from '../../assets/icon/button_arrow.png'

const StoryNews = ({link, story, animate, variants}) => {
    const navigate = useNavigate();
    const isMobile = useMediaQuery(mediaQuery.useMobile);
    const {heading, text, time} = story;

    const viewHandler = () => navigate(link)

    return (
        <StoryContainerItems animate={animate} variants={variants} initial='hidden'>
            <TextContainer>
                <StoryHeading>{heading}</StoryHeading>
                <StoryText>{text}</StoryText>
                <StoryTime><ClockIcon src={iconClock}/>{time}</StoryTime>
            </TextContainer>
            {isMobile ? '' : <ArrowBtn src={arrowBtn} onClick={viewHandler}/>}
        </StoryContainerItems>
    )
}

export default StoryNews;