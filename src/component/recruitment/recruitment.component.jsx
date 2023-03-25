import { useInView } from "react-intersection-observer";

import { RecruitmentContainer } from "./recruitment.style";

import recruitImg from '../../assets/home/main_bg_03.png' 
import InfoHeading from "../infoHeading/infoHeading.component";
import SectionHeading from "../sectionHeading/sectionHeading.component";
import ViewBtn from "../viewBtn/viewBtn.component";


const Recruitment = () => {
    const [ref, inView] = useInView({
        threshold: 0.6,
    })

    return (
        <RecruitmentContainer ref={ref} style={{backgroundImage: `url(${recruitImg})`}}>
            <InfoHeading title={'Recruitment'} className={inView ? 'arriveUp': 'hidden'}/>
            <SectionHeading 
                title={<p>We welcome talented people to<br/> join us in Continum</p>} 
                className={inView ? 'arriveLeft': 'hidden'}
            />
            <ViewBtn link={'contact'} displayOff={true} className={inView ? 'show' : 'hidden'}/>
        </RecruitmentContainer>
    )
}

export default Recruitment;