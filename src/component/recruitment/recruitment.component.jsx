import { RecruitmentContainer } from "./recruitment.style";
import recruitImg from '../../assets/home/main_bg_03.png' 
import InfoHeading from "../infoHeading/infoHeading.component";
import SectionHeading from "../sectionHeading/sectionHeading.component";
import ViewBtn from "../viewBtn/viewBtn.component";


const Recruitment = () => {
    return (
        <RecruitmentContainer style={{backgroundImage: `url(${recruitImg})`}}>
            <InfoHeading title={'Recruitment'}/>
            <SectionHeading title={<p>We welcome talented people to<br/> join us in Continum</p>}/>
            <ViewBtn link={'contact'} displayOff={true}/>
        </RecruitmentContainer>
    )
}

export default Recruitment;