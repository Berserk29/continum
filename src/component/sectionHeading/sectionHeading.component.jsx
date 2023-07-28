import { HeadingSection, TextSection, HeadingContainer, TextContainer } from "./sectionHeading.style";

import ViewBtn from "../viewBtn/viewBtn.component";
import Typo, {TypoType} from '../typo/typo.component'


const SectionHeading = ({props}) => {
    const {titleTop, titleBottom, titleType, text, textType, textMaxWidth, span , viewBtn, alignItems} = props;

    return(
        <HeadingSection alignitems={alignItems}>
            {span && <Typo type={TypoType.Span1_O}>{span}</Typo>}
            <TextSection alignitems={alignItems}>
                <HeadingContainer>
                    <Typo type={TypoType[titleType]}>{titleTop}</Typo>
                    {titleBottom && <Typo type={TypoType[titleType]}>{titleBottom}</Typo>}
                </HeadingContainer>
                {text && <TextContainer maxwidth={textMaxWidth}><Typo type={TypoType[textType]}>{text}</Typo></TextContainer>}
            </TextSection>
            {viewBtn && <ViewBtn link={viewBtn} />}
        </HeadingSection>
    )
}

export default SectionHeading;