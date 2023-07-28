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
    SectionImg,
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
            }, 8000)
            return () => clearInterval(interval)
        }, [carouselNum])


        const imgControl = (i) => {
            if(i === carouselNum) return 1
            return 0
        }

    // onAnimationEnd={()=> setAnimationOn(false)} At the end of the animation -> animation false !!
    // image={carouselArray[carouselNum].imageUrl}

    return (
        <Section >
                <SectionImg opacity={imgControl(0)} image={carouselArray[0].imageUrl}/>
                <SectionImg opacity={imgControl(1)} image={carouselArray[1].imageUrl}/>
                <SectionImg opacity={imgControl(2)} image={carouselArray[2].imageUrl}/>
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