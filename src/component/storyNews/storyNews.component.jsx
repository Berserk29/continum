import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

import { 
    ArrowBtn,
    StoryContainerItems,
    TextContainer
} from "./storyNews.style";

import Typo, {TypoType} from "../typo/typo.component";
import arrowBtn from '../../assets/icon/btn_arrow_default.png'

const StoryNews = ({link, props, animate, variants}) => {
    const { heading, text } = props;
    const navigate = useNavigate();
    const isMobile = useMediaQuery(mediaQuery.useMobile);

    const viewHandler = () => navigate(link)

    return (
        <StoryContainerItems animate={animate} variants={variants} initial='hidden'>
            <TextContainer>
                <Typo type={TypoType.Headline6}>{heading}</Typo>
                <Typo type={TypoType.Text4}>{text}</Typo>
            </TextContainer>
            {!isMobile && <ArrowBtn src={arrowBtn} onClick={viewHandler}/>}
        </StoryContainerItems>
    )
}

export default StoryNews;