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
            <UpperText>We provide outstanding O&M service to the global solar market based on Continum Group's solar and BESS business capabilities and IT technologies</UpperText>
            <StoryContainer>
                <div>
                    <TextHeading title={'Total O&M Solution'}/>
                    <TextCss>A group of experts with global 1GW O&M operation experience provides meticulous and systematic total O&M services</TextCss>
                </div>
                {storyArray.map(el => <StoryNews link='/pr' story={el} key={el.id}/>)}
            </StoryContainer>
            <BessContainer>
                <TextHeading title={'BESS O&M'}/>
                <TextCss>Continum ranked No.1 in BESS O&M capacity, maintains Bess in optimal condition based on global operation experience and the know-how of professional personnel.</TextCss>
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