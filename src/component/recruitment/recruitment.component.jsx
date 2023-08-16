import { RecruitmentContainer } from "./recruitment.style";

import SectionHeading from "../sectionHeading/sectionHeading.component";
import Marker from '../marker/marker.component'
import recruitImg from '../../assets/image/main_05.jpg'

import { headingHome04 } from "../sectionHeading/sectionHeading.data";
import { markerObject4 } from '../marker/marker.data'

const Recruitment = () => {
    return (
        <RecruitmentContainer image={recruitImg}>
            <SectionHeading  props={headingHome04}/> 
            <Marker props={markerObject4}/>
        </RecruitmentContainer>
    )
}

export default Recruitment;