import Header from "../../component/header/header.component";
import TextHeading from "../../component/textHeading/textHeading.component";
import StoryNews from "../../component/storyNews/storyNews.component";
import BessCard from "../../component/BessCard/BessCard.component";
import InfoCard from "../../component/infoCard/infoCard.component";

import { storyArray, bessArray, relatedArray } from "./businessPage.data";

import {
    TextCss,
    UpperText,
    StoryContainer,
    BessContainer,
    CardContainer,
    RelatedContainer,
    RelatedCardContainer,
    BuisinessContainer,
    FlexCenter,
} from "./businessPage.style";

const BusinessPage = ({header}) => {

    return (
        <BuisinessContainer>
            <Header header={header}/>
            <UpperText>We discover untapped opportunities for future generations in uncharted territories.</UpperText>
            <StoryContainer>
                <div>
                    <TextHeading title={'Our planet, our space'}/>
                    <TextCss>We lead all aspects of Canada's satellite industry, from satellites, telecommunications and the supply of satellite services.</TextCss>
                </div>
                {storyArray.map(el => <StoryNews link='/pr' story={el} key={el.id}/>)}
            </StoryContainer>
            <BessContainer>
                <TextHeading title={'Exploration for maritime'}/>
                <TextCss>We lead all aspects of Canada's satellite industry,from satellites, telecommunications and the supply of satellite services.</TextCss>
                <FlexCenter>
                    <CardContainer>
                        {bessArray.map(el => <BessCard props={el} key={el.id}/>)}                
                    </CardContainer>
                </FlexCenter>
            </BessContainer>
            <RelatedContainer>
                <TextHeading title={'Related business'}/>
                <TextCss>The integrated control center of Hanwha Convergence remotely monitors the power plant 24 hours a day and diagnose its operating status and performance. Through this, we organically collaborate with the field to optimize power generation performance and maximize asset value.</TextCss>
                <FlexCenter>
                    <RelatedCardContainer>
                        {relatedArray.map(el => <InfoCard key={el.id} props={el}/>)}
                    </RelatedCardContainer>
                </FlexCenter>
            </RelatedContainer>
        </BuisinessContainer>
    )
}

export default BusinessPage;