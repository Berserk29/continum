import { useAnimation } from "framer-motion";
import { useEffect} from "react";
import { useInView } from "react-intersection-observer";
import { variantLeft, variantRight , slowVariantUp, slowVariantScale} from "../../helper/animationMotion";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

import {
    AboutImage,
    CardContainer,
    CardHeading,
    CardText,
    TextContainer,
} from "./card.style";


const Card = ({card}) => {
let {imageFirst} = card;    
const {imageUrl, heading, text} = card;

const isMobile = useMediaQuery(mediaQuery.useMobile)
if(isMobile) imageFirst = true;

const thresholdNum = isMobile ? 0.3 : 0.7 ;
const control = useAnimation()
const [ref, inView] = useInView({ threshold: thresholdNum, })

useEffect(() => {
    if(inView) control.start('visible')
}, [control, inView])

const arriveDirection = () => {
    if(isMobile) return slowVariantScale
    return imageFirst ? variantRight : variantLeft;  
} 
const aboutImage = (variantsDirection) => <AboutImage src={imageUrl} variants={isMobile ? slowVariantUp : variantsDirection} initial='hidden' animate={control}/> ;

    return (
        <CardContainer ref={ref}>
                { imageFirst ? aboutImage(variantLeft) : ''}
                    <TextContainer                             
                        variants={arriveDirection()}
                        initial='hidden'
                        animate={control}
                    >
                        <CardHeading>{heading}</CardHeading>
                        <CardText>{text}</CardText>
                    </TextContainer>
                { !imageFirst ? aboutImage(variantRight) : ''}
        </CardContainer>
    )
}

export default Card;