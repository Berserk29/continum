import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

import { 
    ImgContainer,
    ImgContainerItems,
    NewsContainer,
    StoryContainer, 
} from "./newsSection.style";

import SectionHeading from "../sectionHeading/sectionHeading.component";
import StoryNews from "../storyNews/storyNews.component";
import Marker from "../marker/marker.component"
import { variantUp } from "../../helper/animationMotion";

import { storyArray, newsBgImg } from "./newsSection.data";
import { headingHome03 } from "../sectionHeading/sectionHeading.data";
import { markerObject3 } from "../marker/marker.data"

const NewsSection = () => {
    const isTablet = useMediaQuery(mediaQuery.useTablet)
    const control = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.5, });

    useEffect(() => {
        if(inView) control.start('visible')
    }, [control, inView])

    return (
       <NewsContainer ref={ref}>
            <ImgContainer image={!isTablet && newsBgImg}>
                <Marker props={markerObject3}/>
                <ImgContainerItems>
                    <SectionHeading props={headingHome03}/>
                </ImgContainerItems>
            </ImgContainer>
            <StoryContainer>
                { storyArray.map(el => <StoryNews link='/media' hide={isTablet} props={el} key={el.id} animate={control} variants={variantUp}/> ) }
            </StoryContainer>
       </NewsContainer>
    )
}

export default NewsSection;