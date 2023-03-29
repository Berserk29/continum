import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { variantLeft, variantScale, variantUp } from "../../helper/animationMotion";

import { RecruitmentContainer } from "./recruitment.style";

import recruitImg from '../../assets/home/main_bg_03.png' 
import InfoHeading from "../infoHeading/infoHeading.component";
import SectionHeading from "../sectionHeading/sectionHeading.component";
import ViewBtn from "../viewBtn/viewBtn.component";


const Recruitment = () => {
    const control = useAnimation()
    const [ref, inView] = useInView({
        threshold: 0.6,
    })

    useEffect(() => {
        if(inView) control.start('visible')
    }, [control, inView])

    return (
        <RecruitmentContainer ref={ref} style={{backgroundImage: `url(${recruitImg})`}}>
            <InfoHeading 
                title={'Recruitment'}
                animate={control}
                variants={variantUp} 
            />
            <SectionHeading 
                title={<p>We Welcome Talented People to<br/> Join us in Continum</p>} 
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