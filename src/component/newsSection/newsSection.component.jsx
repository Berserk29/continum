import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

import { variantLeft, variantScale, variantUp } from "../../helper/animationMotion";
import { storyArray } from "./newsSection.data";

import { 
    ImgContainer,
    ImgContainerItems,
    NewsContainer,
    StoryContainer, 
} from "./newsSection.style";

import SectionHeading from "../sectionHeading/sectionHeading.component";
import ViewBtn from "../viewBtn/viewBtn.component";
import InfoHeading from "../infoHeading/infoHeading.component";
import StoryNews from "../storyNews/storyNews.component";
import NewsImg from '../../assets/home/main_bg_02.png'


const NewsSection = () => {
    const isTablet = useMediaQuery(mediaQuery.useTablet)
    const control = useAnimation();
    const { ref, inView} = useInView({ threshold: 0.5, });

    useEffect(() => {
        if(inView) control.start('visible')
    }, [control, inView])

    const imageLogic = (image) => {
        if(isTablet) return ''
        return `url(${image})`;
    }

    return (
       <NewsContainer ref={ref}>
            <ImgContainer image={imageLogic(NewsImg)}>
                <ImgContainerItems>
                    <InfoHeading 
                        title={'News & Media'} 
                        animate={control}
                        variants={variantLeft}
                    />
                    <SectionHeading
                        color={isTablet ? 'var(--color-black)' : 'var(--color-white)'} 
                        title={<p>Newsroom<br/> Of Continum</p>}
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