import { Fragment } from "react";
import Header from "../../component/header/header.component";
import Card from "../../component/card/card.component";

import { AboutContainer, CardContainer} from "./aboutPage.style";
import { cardArray } from "./aboutPage.data";
import SectionHeading from "../../component/sectionHeading/sectionHeading.component";
import { headingAbout01 } from "../../component/sectionHeading/sectionHeading.data";

const AboutPage = ({header}) => {
    return (
        <Fragment>
            <Header header={header}/>
            <AboutContainer>
                <SectionHeading props={headingAbout01}/>
                <CardContainer>
                    { cardArray.map(el => <Card card={el} key={el.id}/>) }
                </CardContainer>
            </AboutContainer>
        </Fragment>
    )
}

export default AboutPage;