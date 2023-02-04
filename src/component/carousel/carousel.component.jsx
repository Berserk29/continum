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
import SectionText from "../sectionText/sectionText.component";
import ViewBtn from "../viewBtn/viewBtn.component";

const carouselArray = [
    {
        imageUrl: carouselImg0,
        buttonText: 'Green Energy Platform',
        title: <p>Digital technology and<br/> energy business</p>,
        text: 'As a leading VPP and renewable energy electricity supplier in the energy market, we provide renewable energy power.',
    },
    {
        imageUrl: carouselImg1,
        buttonText: 'Smart Factory',
        title: <p>Total solution for<br/> smart factories</p>,
        text: 'We provide total solutions and services for optimized smart factory operation, from onsite facilities to integrated control system establishment and real-time data collection, processing, and analysis, based on digital technology capabilities and various industrial experiences.',
    },
    {
        imageUrl: carouselImg2,
        buttonText: 'Factory Automation',
        title: <p>Automatic control solution<br/> innovative technology</p>,
        text: 'We provide incomparable solutions from industrial facilities to top-level integrated control and deliver services from consulting to design, system development, operation, and maintenance to improve customer business value through plant operation',
    },
]


const Carousel = () => {
    const [carouselNum, setCarouselNum] = useState(0)
    
    const numHandler = (num) => {
        setCarouselNum(num)
    }

    // const buttonHandler = () => {
    //     if(carouselNum < carouselArray.length - 1) setCarouselNum(carouselNum+1)
    //     else setCarouselNum(0)
    // }

    return (
        <CarouselContainer style={{backgroundImage: `url(${carouselArray[carouselNum].imageUrl})`}}>
            <ItemContainer>
                {
                    carouselArray.map((el,i) => {
                        return (
                            carouselNum !== i ?
                            <CarouselItem key={i}><CarouselBtn onClick={() => numHandler(i)}>{el.buttonText}</CarouselBtn></CarouselItem>
                            :
                            <CarouselItem key={i}><CarouselBtnActive onClick={() => numHandler(i)}>{el.buttonText}</CarouselBtnActive></CarouselItem>
                        )
                    })
                }
            </ItemContainer>
            <SectionHeading title={carouselArray[carouselNum].title}/>
            <SectionText text={carouselArray[carouselNum].text} />
            <ViewBtn link={'about'}/>
        </CarouselContainer>
    )
}

export default Carousel;