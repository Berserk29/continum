import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
import { useAnimation } from "framer-motion";
import mediaQuery from "../../helper/mediaQuery";
import { variantLeft, variantScale, variantUp } from "../../helper/animationMotion";

import { 
    ImgContainer,
    ImgContainerItems,
    NewsContainer,
    StoryContainer, 
    } from "./newsSection.style";

import NewsImg from '../../assets/home/main_bg_02.png'

import SectionHeading from "../sectionHeading/sectionHeading.component";
import ViewBtn from "../viewBtn/viewBtn.component";
import InfoHeading from "../infoHeading/infoHeading.component";
import StoryNews from "../storyNews/storyNews.component";

const storyArray = [
    {
        id: 1,
        heading: 'Better Soil, Better Life',
        text: 'In the Seven Years Since The United Nations Member States Came Together to Adopt the 2030...',
        time: '2022.12.15'
    },
    {
        id: 2,
        heading: 'Reinforced Competitiveness',
        text: 'Reinforcing competitiveness through quality management systems',
        time: '2022.11.26'
    },
    {
        id: 3,
        heading: 'Quality Management Policy',
        text: 'Enhances customer value and service quality through a globally standardized...',
        time: '2022.12.07'
    },
]

const NewsSection = () => {
    const isTablet = useMediaQuery(mediaQuery.useTablet)
    const control = useAnimation();


    const { ref, inView} = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        if(inView) control.start('visible')
    }, [control, inView])

    const imageLogic = (image) => {
        if(isTablet) return ''
        return `url(${image})` 
    }

    return (
       <NewsContainer ref={ref}>
            <ImgContainer  style={{backgroundImage: imageLogic(NewsImg)}}>
                <ImgContainerItems>
                    <InfoHeading 
                        title={'News'} 
                        animate={control}
                        variants={variantLeft}
                    />
                    <SectionHeading
                        color={isTablet ? 'var(--color-black)' : 'var(--color-white)'} 
                        title={<p>See<br/> the latest<br/> News Now</p>}
                        animate={control}
                        variants={variantLeft}
                        />
                    <ViewBtn link={'business'} animate={control} variants={variantScale}/>
                </ImgContainerItems>
            </ImgContainer>
            <StoryContainer>
                { 
                    storyArray.map(el => <StoryNews link='/pr' story={el} key={el.id} animate={control} variants={variantUp}/> )
                }
            </StoryContainer>
       </NewsContainer>
    )
}

export default NewsSection;