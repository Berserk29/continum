import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { variantLeft, variantScale, variantUp } from "../../helper/animationMotion";

import { RecruitmentContainer } from "./recruitment.style";

import recruitImg from '../../assets/home/main_bg_03.png' 
import InfoHeading from "../infoHeading/infoHeading.component";
import SectionHeading from "../sectionHeading/sectionHeading.component";
import ViewBtn from "../viewBtn/viewBtn.component";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";



const Recruitment = () => {
    const isMobile = useMediaQuery(mediaQuery.useMobile)
    const control = useAnimation()
    const [ref, inView] = useInView({ threshold: 0.6,})

    useEffect(() => {
        if(inView) control.start('visible')
    }, [control, inView])

    return (
        <RecruitmentContainer ref={ref} image={`url(${recruitImg})`}>
            <InfoHeading 
                title={'Sustainable Management'}
                animate={control}
                variants={variantUp} 
            />
            <SectionHeading 
                title={<p>Make variety efforts {isMobile ? '' : <br/>} in every area</p>} 
                animate={control}
                variants={variantLeft}
            />
            <ViewBtn 
                link={'contact'} 
                displayOff={true}
                animate={control}
                variants={variantScale} 
            />
        </RecruitmentContainer>
    )
}

export default Recruitment;