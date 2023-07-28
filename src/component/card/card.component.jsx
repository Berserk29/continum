import { useAnimation } from "framer-motion";
import { useEffect} from "react";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

import {
    AboutImage,
    CardContainer,
    TextContainer,
} from "./card.style";

import { variantUp } from "../../helper/animationMotion";
import Typo, { TypoType } from "../typo/typo.component";


const Card = ({card}) => {
    const {imageUrl, heading, text, imageFirst} = card;

    const isTablet = useMediaQuery(mediaQuery.useTablet)

    const thresholdNum = isTablet ? 0.1 : 0.4;
    const control = useAnimation()
    const [ref, inView] = useInView({ threshold: thresholdNum })

    useEffect(() => {
        if(inView) control.start('visible')
    }, [control, inView])


    return (
        <CardContainer ref={ref} imagefirst={imageFirst}>
            <AboutImage src={imageUrl} variants={variantUp} initial='hidden' animate={control}/>
            <TextContainer                             
                variants={variantUp}
                initial='hidden'
                animate={control}
            >
                <Typo type={TypoType.Title5_B}>{heading}</Typo>
                <Typo type={TypoType.Text3_B}>{text}</Typo>
            </TextContainer>
        </CardContainer>
    )
}

export default Card;