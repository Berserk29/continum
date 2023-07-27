import { Fragment } from "react";
import Header from "../../component/header/header.component";
import Card from "../../component/card/card.component";

import { AboutContainer, UpperText } from "./aboutPage.style";
import { cardArray } from "./aboutPage.data";


const AboutPage = ({header}) => {
    return (
        <Fragment>
            <Header header={header}/>
            <AboutContainer>
                <UpperText>We create sustainable technologies to protect human-beings and our planet.</UpperText>
                { cardArray.map(el => <Card card={el} key={el.id}/>) }
            </AboutContainer>
        </Fragment>
    )
}

export default AboutPage;