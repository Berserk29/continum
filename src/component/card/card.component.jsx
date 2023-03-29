import { useAnimation } from "framer-motion";
import { useEffect} from "react";
import { useInView } from "react-intersection-observer";
import { variantLeft, variantRight} from "../../helper/animationMotion";
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

const control = useAnimation()
const [ref, inView] = useInView({
    threshold: 0.7,
})

useEffect(() => {
    if(inView) control.start('visible')
}, [control, inView])

const arriveDirection = () => {
    return imageFirst ? variantRight : variantLeft;
}


    return (
        <CardContainer ref={ref}>
                { imageFirst ? <AboutImage src={imageUrl} variants={variantLeft} initial='hidden' animate={control}/> : ''}
                    <TextContainer                             
                        variants={arriveDirection()}
                        initial='hidden'
                        animate={control}
                    >
                        <CardHeading>{heading}</CardHeading>
                        <CardText>{text}</CardText>
                    </TextContainer>
                { !imageFirst ? <AboutImage src={imageUrl} variants={variantRight} initial='hidden' animate={control}/> : ''}
        </CardContainer>
    )
}


export default Card;