import Typo, { TypoType } from "../typo/typo.component";

import {VerticalContainer, CardImg, HeadingContainer, TextContainer, HorizontalContainer, TextSection, CardImgHorizon } from "./infoCard.style";

const InfoCard = ({props}) => {
    const {imageUrl, heading, text, color, vertical, padding, middleGap} = props;
    return (
        <>
        { vertical ? 
            <VerticalContainer color={color} padding={padding} gap={middleGap}>
                <HeadingContainer>
                    <CardImg src={imageUrl}/>
                    <Typo type={TypoType.Headline5}>{heading}</Typo>
                </HeadingContainer>
                <TextContainer padding={middleGap}>
                    <Typo type={TypoType.Text3}>{text}</Typo>
                </TextContainer>
            </VerticalContainer>
            :
            <HorizontalContainer color={color}>
                <CardImgHorizon src={imageUrl}/>
                <TextSection>
                    <Typo type={TypoType.Headline6}>{heading}</Typo>
                    <Typo type={TypoType.Text3}>{text}</Typo>
                </TextSection>
            </HorizontalContainer>
        }
        </>
    )
}

export default InfoCard;