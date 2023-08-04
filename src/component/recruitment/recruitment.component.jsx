import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

// import { variantLeft, variantScale, variantUp } from "../../helper/animationMotion";

import { RecruitmentContainer } from "./recruitment.style";

import SectionHeading from "../sectionHeading/sectionHeading.component";

import recruitImg from '../../assets/image/main_05.jpg' 
import { headingHome04 } from "../sectionHeading/sectionHeading.data";

const Recruitment = () => {
    const control = useAnimation()
    const [ref, inView] = useInView({ threshold: 0.6,})

    useEffect(() => {
        if(inView) control.start('visible')
    }, [control, inView])

    return (
        <RecruitmentContainer ref={ref} image={`url(${recruitImg})`}>
            <SectionHeading  props={headingHome04}/> 
        </RecruitmentContainer>
    )
}

export default Recruitment;