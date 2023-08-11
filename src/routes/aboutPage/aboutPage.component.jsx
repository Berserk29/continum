import { AboutContainer, CardContainer} from "./aboutPage.style";

import Card from "../../component/card/card.component";
import SectionHeading from "../../component/sectionHeading/sectionHeading.component";
import Boilerplate from "../../component/boilerplate/boilerplate.component";

import { cardArray } from "./aboutPage.data";
import { headingAbout01 } from "../../component/sectionHeading/sectionHeading.data";

const AboutPage = ({props}) => {
    return (
        <Boilerplate props={props}>
            <AboutContainer>
                <SectionHeading props={headingAbout01}/>
                <CardContainer>
                    { cardArray.map(el => <Card card={el} key={el.id}/>) }
                </CardContainer>
            </AboutContainer>
        </Boilerplate>
    )
}

export default AboutPage;