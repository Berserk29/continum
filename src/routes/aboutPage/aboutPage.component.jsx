import Header from "../../component/header/header.component"
import Card from "../../component/card/card.component";

import { AboutContainer, UpperText } from "./aboutPage.style";

import { cardArray } from "./aboutPage.data";


const AboutPage = ({header}) => {

    return (
        <div>
            <Header header={header}/>
            <AboutContainer>
                <UpperText>We bring tomorrow's dreams to life and create a smarter world with our customers by adding value to technology</UpperText>
                {
                    cardArray.map(el => <Card card={el} key={el.id}/>)
                }
            </AboutContainer>
        </div>
    )
}

export default AboutPage;