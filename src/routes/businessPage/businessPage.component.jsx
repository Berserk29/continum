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
    InfoContainer,
    InfoCardContainer,
    BuisinessContainer,
    FlexCenter,
    CardContainer,
} from "./businessPage.style";


// TODO REDOO ALL THE PAGE!!!!

const BusinessPage = ({header}) => {

    return (
        <Fragment>
            <Header header={header}/>
            <BuisinessContainer>
                <StoryContainer>
                    <SectionHeading props={headingBu01}/>
                    <SectionHeading props={headingBu02}/>
                    <div>
                        {storyArray.map(el => <StoryNews link='/pr' props={el} key={el.id}/>)}
                    </div>
                </StoryContainer>
                <InfoContainer>
                    <SectionHeading props={headingBu03}/>
                    <FlexCenter>
                        <InfoCardContainer>
                            {infoCardArray.map(el => <InfoCard props={el} key={el.id}/>)}                
                        </InfoCardContainer>
                    </FlexCenter>
                </InfoContainer>
                <SectionHeading props={headingBu04}/>
                <CardContainer>
                    {cardArray.map(el => <Card card={el} key={el.id}/>)}
                </CardContainer>
            </BuisinessContainer>
        </Fragment>
    )
}

export default BusinessPage;