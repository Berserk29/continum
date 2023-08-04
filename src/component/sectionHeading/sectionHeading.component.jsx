import { HeadingSection, TextSection, HeadingContainer, TextContainer } from "./sectionHeading.style";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

import ViewBtn from "../viewBtn/viewBtn.component";
import Typo, {TypoType} from '../typo/typo.component'


const SectionHeading = ({props}) => {
    const {titleTop, titleBottom, titleType, text, textType, textMaxWidth, span , viewBtn, alignItems, isBecomeOne, modifiedAlign, modifiedGap, headingColor, textColor, linkColor} = props;
    const isMobile = useMediaQuery(mediaQuery.useMobile)
    const isTablet = useMediaQuery(mediaQuery.useTablet)

    const isBecomeOneLogic = () => {
        if(isMobile && titleBottom && isBecomeOne) return titleBottom
    }

    const titleBottomLogic = () => {
        if(!titleBottom) return;
        if(isMobile && isBecomeOne) return;
        return <Typo type={TypoType[titleType]} headingColor={headingColor}>{titleBottom}</Typo>
    }

    const modifiedLogic = (modifiedProps, nonModifiedProps) => {
        if(!modifiedProps) return nonModifiedProps;
        if(isMobile) return modifiedProps[1];
        if(isTablet) return modifiedProps[0];
    }

    return(
        <HeadingSection alignitems={modifiedLogic(modifiedAlign, alignItems)} gap={modifiedLogic(modifiedGap, 6.4)}>
            {span && <Typo type={TypoType.SpanOrange}>{span}</Typo>}
            <TextSection alignitems={alignItems}>
                <HeadingContainer>
                    <Typo type={TypoType[titleType]} headingColor={headingColor}>{titleTop} {isBecomeOneLogic()}</Typo>
                    {titleBottomLogic()}
                </HeadingContainer>
                {text && <TextContainer maxwidth={textMaxWidth}><Typo type={TypoType[textType]} textColor={textColor} >{text}</Typo></TextContainer>}
            </TextSection>
            {viewBtn && <ViewBtn link={viewBtn} linkColor={linkColor} />}
        </HeadingSection>
    )
}

export default SectionHeading;