import { HeadingSection, TextSection, HeadingContainer, TextContainer } from "./sectionHeading.style";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

import ViewBtn from "../viewBtn/viewBtn.component";
import Typo, {TypoType} from '../typo/typo.component'


const SectionHeading = ({props}) => {
    const {titleTop, titleBottom, titleType, text, textType, textMaxWidth, span , viewBtn, alignItems, isBecomeOne} = props;
    const isMobile = useMediaQuery(mediaQuery.useMobile)

    const isBecomeOneLogic = () => {
        if(isMobile && titleBottom && isBecomeOne) return titleBottom
    }

    const titleBottomLogic = () => {
        if(!titleBottom) return;
        if(isMobile && isBecomeOne) return;
        return <Typo type={TypoType[titleType]}>{titleBottom}</Typo>
    }

    return(
        <HeadingSection alignitems={alignItems}>
            {span && <Typo type={TypoType.Span1_O}>{span}</Typo>}
            <TextSection alignitems={alignItems}>
                <HeadingContainer>
                    <Typo type={TypoType[titleType]}>{titleTop} {isBecomeOneLogic()}</Typo>
                    {titleBottomLogic()}
                </HeadingContainer>
                {text && <TextContainer maxwidth={textMaxWidth}><Typo type={TypoType[textType]}>{text}</Typo></TextContainer>}
            </TextSection>
            {viewBtn && <ViewBtn link={viewBtn} />}
        </HeadingSection>
    )
}

export default SectionHeading;