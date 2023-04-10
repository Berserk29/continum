import { useEffect, useState } from "react";

import ViewBtn from "../viewBtn/viewBtn.component";
import { comingRight, comingBack, comingUp } from "../../animation/animation.style";
import { carouselArray } from "./carousel.data";

import { 
    Section,
    CarouselContainer,
    ItemContainer,
    CarouselItem,
    HeadingCarousel,
    UpperHeading,
    LowerHeading,
    CarouselText,
    CarouselBtn,
    CarouselBtnActive,
} from "./carousel.style";

const Carousel = () => {
    const [carouselNum, setCarouselNum] = useState(0);
    const [animationOn, setAnimationOn] = useState(false);

    const CarouselHandler = (num) => {
        setCarouselNum(num)
        setAnimationOn(true)
    }

    // Carousel Timer
        useEffect(() => {
            const interval = setInterval(() => {
                carouselNum === carouselArray.length - 1 ? setCarouselNum(0) : setCarouselNum(carouselNum + 1)
                setAnimationOn(true)
            }, 12000)
            return () => clearInterval(interval)
        }, [carouselNum])


    // onAnimationEnd={()=> setAnimationOn(false)} At the end of the animation -> animation false !!
    
    return (
        <Section image={carouselArray[carouselNum].imageUrl}>
            <CarouselContainer>
                <ItemContainer>
                    {carouselArray.map((el,i) => {
                        return (
                            carouselNum !== i ?
                            <CarouselItem key={i}><CarouselBtn onClick={() => CarouselHandler(i)}>{el.buttonText}</CarouselBtn></CarouselItem>
                            :
                            <CarouselItem key={i}><CarouselBtnActive>{el.buttonText}</CarouselBtnActive></CarouselItem>
                        )
                    })}
                </ItemContainer>
                <HeadingCarousel>
                    <UpperHeading
                        animation={animationOn ? comingRight : ''}
                        time='1'
                    >{carouselArray[carouselNum].upperTitle}</UpperHeading>
                    <LowerHeading
                        animation={animationOn ? comingUp : ''}
                        time='1.5'  
                    >{carouselArray[carouselNum].lowerTitle}</LowerHeading>
                </HeadingCarousel>
                <CarouselText
                    onAnimationEnd={() => setAnimationOn(false)}
                    animation={animationOn ? comingBack : ''} 
                    time='1.7'
                >{carouselArray[carouselNum].text}</CarouselText>
                <ViewBtn
                color="var(--color-white)"
                animation={animationOn ? comingBack : ''}
                time='1.7' 
                link={'about'}/>
            </CarouselContainer>
        </Section>
    )
}

export default Carousel;