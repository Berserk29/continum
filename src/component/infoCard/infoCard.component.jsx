import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
    VerticalContainer,
    CardImg,
    HeadingContainer,
    TextContainer,
    HorizontalContainer,
    TextSection,
    CardImgHorizon
} from "./infoCard.style";

import Typo, { TypoType } from "../typo/typo.component";

const InfoCard = ({props}) => {
    const {imageUrl, heading, text, color, vertical, padding, middleGap, delay = 0} = props;
    const control = useAnimation()
    const [ref, inView] = useInView({threshold: 0.2})

    useEffect(() => {
        if(inView) control.start('visible')
    }, [control, inView])

    const variantUpDelay = {
        visible: {opacity: 1, y: 0, transition: {duration: .8, delay: delay}},
        hidden: {opacity: 0, y: '120px'}
    }

    return (
        <>
        { vertical ? 
            <VerticalContainer 
                ref={ref} 
                initial='hidden' 
                animate={control}
                variants={variantUpDelay} 
                color={color} 
                padding={padding}
                gap={middleGap}
            >
                <HeadingContainer>
                    <CardImg src={imageUrl}/>
                    <Typo type={TypoType.Headline5}>{heading}</Typo>
                </HeadingContainer>
                <TextContainer padding={middleGap}>
                    <Typo type={TypoType.Text3}>{text}</Typo>
                </TextContainer>
            </VerticalContainer>
            :
            <HorizontalContainer 
                ref={ref}
                color={color}
                animate={control}
                initial='hidden' 
                variants={variantUpDelay} 
            >
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