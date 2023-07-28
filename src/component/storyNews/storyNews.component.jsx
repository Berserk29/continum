import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

import { 
    ArrowBtn,
    StoryContainerItems,
    TextContainer
} from "./storyNews.style";

import Typo, {TypoType} from "../typo/typo.component";

// TODO BRING THE HOVER ICON
import arrowBtn from '../../assets/icon/btn_arrow_default.png'

const StoryNews = ({link, props, animate, variants}) => {
    const navigate = useNavigate();
    const isMobile = useMediaQuery(mediaQuery.useMobile);
    const {heading, text } = props;

    const viewHandler = () => navigate(link)

    return (
        <StoryContainerItems animate={animate} variants={variants} initial='hidden'>
            <TextContainer>
                <Typo type={TypoType.TitleNoto1_B}>{heading}</Typo>
                <Typo type={TypoType.Text5_B}>{text}</Typo>
            </TextContainer>
            {!isMobile && <ArrowBtn src={arrowBtn} onClick={viewHandler}/>}
        </StoryContainerItems>
    )
}

export default StoryNews;