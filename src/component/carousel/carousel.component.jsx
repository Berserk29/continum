import { useState } from "react";
import { 
    CarouselContainer,
    ItemContainer,
    CarouselItem,
    CarouselBtn,
    CarouselBtnActive,
} from "./carousel.style";

import carouselImg0 from '../../assets/home/main_carousel-0.png'
import carouselImg1 from '../../assets/home/main_carousel-1.png'
import carouselImg2 from '../../assets/home/main_carousel-2.png'
import SectionHeading from "../sectionHeading/sectionHeading.component";

const carouselArray = [
    {
        imageUrl: carouselImg0,
        buttonHeading: 'Green Energy Platform',
        heading: <text>Digital technology and<br/> energy business</text>,
        text: 'blablabla',
    },
    {
        imageUrl: carouselImg1,
        buttonHeading: 'Smart Factory',
        heading: 'img2',
        text: 'blablabla',
    },
    {
        imageUrl: carouselImg2,
        buttonHeading: 'Factory Automation',
        heading: 'img3',
        text: 'blablabla',
    },
]


const Carousel = () => {
    const [carouselNum, setCarouselNum] = useState(0)

    // const buttonHandler = () => {
    //     if(carouselNum < carouselArray.length - 1) setCarouselNum(carouselNum+1)
    //     else setCarouselNum(0)
    // }

    const numHandler = (num) => {
        setCarouselNum(num)
    }



    return (
        <CarouselContainer style={{backgroundImage: `url(${carouselArray[carouselNum].imageUrl})`}}>
            <ItemContainer>
                {
                    carouselArray.map((el,i) => {
                        return (
                            carouselNum !== i ?
                            <CarouselItem key={i}><CarouselBtn onClick={() => numHandler(i)}>{el.buttonHeading}</CarouselBtn></CarouselItem>
                            :
                            <CarouselItem key={i}><CarouselBtnActive onClick={() => numHandler(i)}>{el.buttonHeading}</CarouselBtnActive></CarouselItem>
                        )
                    })
                }
            </ItemContainer>
            <SectionHeading title={carouselArray[carouselNum].heading}/>
        </CarouselContainer>
    )
}

export default Carousel;