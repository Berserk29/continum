import { useAnimation } from "framer-motion";
import { useEffect} from "react";
import { useInView } from "react-intersection-observer";

import {
    AboutImage,
    CardContainer,
    CardHeading,
    CardText,
    TextContainer,
} from "./card.style";


const Card = ({card}) => {
const {imageFirst, imageUrl, heading, text} = card;

const control = useAnimation()
const [ref, inView] = useInView({
    threshold: 0.7,
})

useEffect(() => {
    if(inView){
        control.start('visible')
    }
}, [control, inView])

const variantLeft = {
    visible: {opacity: 1, x: 0, transition: {duration: 1.2}},
    hidden: {opacity: 0, x: -1000}
}

const variantRight = {
    visible: {opacity: 1, x: 0, transition: {duration: 1.2}},
    hidden: {opacity: 0, x: 1000}
}

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