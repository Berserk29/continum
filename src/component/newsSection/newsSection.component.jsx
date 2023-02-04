import { 
    ImgContainer,
    ImgContainerItems,
    NewsContainer,
    StoryContainer,
    } from "./newsSection.style";

import NewsImg from '../../assets/home/main_bg_02.png'

import SectionHeading from "../sectionHeading/sectionHeading.component";
import ViewBtn from "../viewBtn/viewBtn.component";
import InfoHeading from "../infoHeading/infoHeading.component";
import StoryNews from "../storyNews/storyNews.component";

const storyArray = [
    {
        id: 1,
        heading: 'Better Soil, Better Life',
        text: 'In the Seven Years Since The United Nations Member States Came Together to Adopt the 2030...',
        time: '2022.12.15'
    },
    {
        id: 2,
        heading: 'Reinforced Competitiveness',
        text: 'Reinforcing competitiveness through quality management systems',
        time: '2022.11.26'
    },
    {
        id: 3,
        heading: 'Quality Management Policy',
        text: 'Enhances customer value and service quality through a globally standardized...',
        time: '2022.12.07'
    },
]

const NewsSection = () => {
    return (
       <NewsContainer>
            <ImgContainer style={{backgroundImage: `url(${NewsImg})`}}>
                <ImgContainerItems>
                    <InfoHeading title={'News'}/>
                    <SectionHeading title={<p>See<br/> the latest<br/> News Now</p>}/>
                    <ViewBtn link={'business'}/>
                </ImgContainerItems>
            </ImgContainer>
            <StoryContainer>
                { 
                    storyArray.map(el => <StoryNews story={el} key={el.id}/> )
                }
            </StoryContainer>
       </NewsContainer>
    )
}

export default NewsSection;