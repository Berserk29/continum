import { useEffect, useState } from "react";

import { comingRight, comingBack, comingUp } from "../../animation/animation.style";

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

import carouselImg0 from '../../assets/home/main_carousel-0.png'
import carouselImg1 from '../../assets/home/main_carousel-1.png'
import carouselImg2 from '../../assets/home/main_carousel-2.png'

import ViewBtn from "../viewBtn/viewBtn.component";

const carouselArray = [
    {
        imageUrl: carouselImg0,
        buttonText: 'Green Energy Platform',
        upperTitle: 'Digital technology and',
        lowerTitle: 'Energy business',
        text: 'As a leading VPP and renewable energy electricity supplier in the energy market, we provide renewable energy power.',
    },
    {
        imageUrl: carouselImg1,
        buttonText: 'Smart Factory',
        upperTitle: 'Total solution',
        lowerTitle: 'for smart factories',
        text: 'We provide total solutions and services for optimized smart factory operation, from onsite facilities to integrated control system establishment and real-time data collection, processing, and analysis, based on digital technology capabilities and various industrial experiences.',
    },
    {
        imageUrl: carouselImg2,
        buttonText: 'Factory Automation',
        upperTitle: 'Automatic control',
        lowerTitle: 'Innovative technology',
        text: 'We provide incomparable solutions from industrial facilities to top-level integrated control and deliver services from consulting to design, system development, operation, and maintenance to improve customer business value through plant operation',
    },
]


const Carousel = () => {
    const [carouselNum, setCarouselNum] = useState(0)
    const [animationOn, setAnimationOn] = useState(false)

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
    
    // TRANSITION DOES NOT WORK WITH THAT BUG TODO 
    // backgroundImage -->  , linear-gradient(to right, #00000010 , #00000060)`

    return (
        <Section style={{backgroundImage: `url(${carouselArray[carouselNum].imageUrl})`}}>
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