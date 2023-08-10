import { Fragment } from "react";

import Header from "../../component/header/header.component";
import StoryNews from "../../component/storyNews/storyNews.component";
import InfoCard from "../../component/infoCard/infoCard.component";
import SectionHeading from "../../component/sectionHeading/sectionHeading.component";
import Card from "../../component/card/card.component";

import { storyArray, infoCardArray, cardArray} from "./businessPage.data";
import { headingBu01, headingBu02, headingBu03, headingBu04 } from "../../component/sectionHeading/sectionHeading.data";

import {
    StoryContainer,
    Section,
    SectionCard,
    InfoContainer,
    InfoCardContainer,
    BuisinessContainer,
    FlexCenter,
    CardContainer,
} from "./businessPage.style";


// TODO REDOO ALL THE PAGE!!!!

const BusinessPage = ({props}) => {

    return (
        <Fragment>
            <Header props={props}/>
            <BuisinessContainer>
                <StoryContainer>
                    <SectionHeading props={headingBu01}/>
                    <Section>
                        <SectionHeading props={headingBu02}/>
                        <div>
                            {storyArray.map(el => <StoryNews link='/esg' props={el} key={el.id}/>)}
                        </div>
                    </Section>
                </StoryContainer>
                <InfoContainer>
                    <SectionHeading props={headingBu03}/>
                    <FlexCenter>
                        <InfoCardContainer>
                            {infoCardArray.map(el => <InfoCard props={el} key={el.id}/>)}                
                        </InfoCardContainer>
                    </FlexCenter>
                </InfoContainer>
                <CardContainer>
                        <SectionHeading props={headingBu04}/>
                        <SectionCard>
                            {cardArray.map(el => <Card card={el} key={el.id}/>)}
                        </SectionCard>
                </CardContainer>
            </BuisinessContainer>
        </Fragment>
    )
}

export default BusinessPage;