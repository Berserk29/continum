import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

import { 
    ArrowBtn,
    StoryContainerItems,
    TextContainer,
    TextCss
} from "./storyNews.style";

import Typo, {TypoType} from "../typo/typo.component";
import arrowBtn from '../../assets/icon/btn_arrow_default.png'

const StoryNews = ({link, props, animate, variants, hide}) => {
    const { heading, text } = props;
    const navigate = useNavigate();
    const isMobile = useMediaQuery(mediaQuery.useMobile);

    const viewHandler = () => navigate(link)

    return (
        <StoryContainerItems animate={animate} variants={variants} initial='hidden'>
            <TextContainer>
                <TextCss hide={hide}><Typo type={TypoType.Headline6}>{heading}</Typo></TextCss>
                <TextCss hide={hide}><Typo type={TypoType.Text4}>{text}</Typo></TextCss>
            </TextContainer>
            {!isMobile && <ArrowBtn  src={arrowBtn} onClick={viewHandler}/>}
        </StoryContainerItems>
    )
}

export default StoryNews;