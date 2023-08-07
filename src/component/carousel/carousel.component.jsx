import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import Typo ,{ TypoType } from "../typo/typo.component";
import ViewBtn from "../viewBtn/viewBtn.component";

import { markerObject2 } from "../marker/marker.data";
import { comingRight, comingBack, comingUp } from "../../animation/animation.style";
import { carouselArray} from "./carousel.data";

import { 
    Section,
    CarouselContainer,
    ItemContainer,
    CarouselItem,
    CarouselText,
    CarouselBtn,
    CarouselBtnActive,
    SectionImg,
    AniContainer,
} from "./carousel.style";
import Marker from "../marker/marker.component";

const Carousel = () => {
    const [carouselNum, setCarouselNum] = useState(0);
    const [animationOn, setAnimationOn] = useState(false);
    const [ref, inView] = useInView({threshold: 0.3})

    const CarouselHandler = (num) => {
        setCarouselNum(num)
        setAnimationOn(true)
    }

    // CAROUSEL TIMER
        useEffect(() => { 
            if(!inView) return;
            const interval = setInterval(() => {
                carouselNum === carouselArray.length - 1 ? setCarouselNum(0) : setCarouselNum(carouselNum + 1)
                setAnimationOn(true)
            }, 8000)
            return () => clearInterval(interval)
        }, [carouselNum, inView])


        const imgControl = (i) => {
            if(i === carouselNum) return 1
            return 0
        }

        const CarouselLogic = (el, i) => (
            carouselNum !== i ?
            <CarouselItem key={i}><CarouselBtn onClick={() => CarouselHandler(i)}>{el.buttonText}</CarouselBtn></CarouselItem>
            :
            <CarouselItem key={i}><CarouselBtnActive>{el.buttonText}</CarouselBtnActive></CarouselItem>
        )

    // onAnimationEnd={()=> setAnimationOn(false)} At the end of the animation -> animation false !!
    

    return (
        <Section ref={ref}>
                <SectionImg opacity={imgControl(0)} image={carouselArray[0].imageUrl}/>
                <SectionImg opacity={imgControl(1)} image={carouselArray[1].imageUrl}/>
                <SectionImg opacity={imgControl(2)} image={carouselArray[2].imageUrl}/>
            <CarouselContainer>
                <ItemContainer>
                    {carouselArray.map((el,i) => CarouselLogic(el,i))}
                </ItemContainer>
                <div>
                    {/* UPPER TITLE */}
                    <AniContainer animation={animationOn && comingRight} time='1'>
                        <Typo type={TypoType.Headline2}>{carouselArray[carouselNum].upperTitle}</Typo>
                    </AniContainer>
                    {/* LOWER TITLE */}
                    <AniContainer animation={animationOn && comingUp} time='1.5'>
                        <Typo type={TypoType.Headline2}>{carouselArray[carouselNum].lowerTitle}</Typo>
                    </AniContainer>
                    {/* TEXT  */}
                    <CarouselText onAnimationEnd={() => setAnimationOn(false)} animation={animationOn && comingBack} time='1.7'>
                            <Typo type={TypoType.Text1}>{carouselArray[carouselNum].text}</Typo>
                    </CarouselText>
                </div>
                <ViewBtn
                linkColor="var(--color-white-opa80)"
                animation={animationOn && comingBack}
                time='1.7' 
                link={'business'}/>
            </CarouselContainer>
            <Marker  props={markerObject2}/>
        </Section>
    )
}

export default Carousel;