import { Fragment } from "react";
import Header from "../../component/header/header.component";
import Card from "../../component/card/card.component";

import { AboutContainer} from "./aboutPage.style";
import { cardArray } from "./aboutPage.data";
import Typo, { TypoType } from "../../component/typo/typo.component";


const AboutPage = ({header}) => {
    return (
        <Fragment>
            <Header header={header}/>
            <AboutContainer>
                <div>
                    <Typo type={TypoType.Title3_B}>We create sustainable technologies</Typo>
                    <Typo type={TypoType.Title3_B}>to protect human-beings and our planet.</Typo>
                </div>
                { cardArray.map(el => <Card card={el} key={el.id}/>) }
            </AboutContainer>
        </Fragment>
    )
}

export default AboutPage;