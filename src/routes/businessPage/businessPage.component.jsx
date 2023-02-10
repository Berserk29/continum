import Header from "../../component/header/header.component";
import TextHeading from "../../component/textHeading/textHeading.component";
import StoryNews from "../../component/storyNews/storyNews.component";
import BessCard from "../../component/BessCard/BessCard.component";
import RelatedCard from "../../component/relatedCard/relatedCard.component";

import {
    TextCss,
    UpperText,
    StoryContainer,
    BessContainer,
    CardContainer,
    RelatedContainer,
    RelatedCardContainer,
    BuisinessContainer
} from "./businessPage.style";

import iconBusiness1 from '../../assets/business/business_icon_01.png';
import iconBusiness2 from '../../assets/business/business_icon_02.png';
import iconBusiness3 from '../../assets/business/business_icon_03.png';
import iconBusiness4 from '../../assets/business/business_icon_04.png';
import iconRelated5 from '../../assets/business/business_icon_05.png';
import iconRelated6 from '../../assets/business/business_icon_06.png';


const storyArray = [
    {
        id: 1,
        heading: 'Maintaining And Extending System Life',
        text: 'Replace consumables in a timely manner, keep adequate spare parts',
        time: '2022.12.07'
    },
    {
        id: 2,
        heading: 'Reinforced Preventive Checks',
        text: 'Always be alerted through a dedicated manager, Big data-based preliminary inspection, Periodic detailed inspection',
        time: '2022.12.05'
    },
    {
        id: 3,
        heading: 'Rapid incident Response And Handling',
        text: 'Leverage Continum solar network, Emergency dispatch and immediate recovery',
        time: '2022.12.04'
    },
]
// String.fromCharCode --> UTF-16 Encoding  !
const plusMinus = String.fromCharCode(0x00B1)
const celcius = String.fromCharCode(0x2103)

const bessArray = [
    {
        id: 1,
        imageUrl: iconBusiness1,
        heading: <p>Stable battery <br/>operation</p>,
        bulletPoint: [`Maintain proper temperature (23${plusMinus}5${celcius})`, `Maintain proper humidity (48${plusMinus}5%)`],
    },
    {
        id: 2,
        imageUrl: iconBusiness2,
        heading: 'Prevention of causes of fire accidents',
        bulletPoint: ['HVAC system monitoring', 'Enclosure leak and corrosion protection', 'Installation of fire detection systems'],
    },
    {
        id: 3,
        imageUrl: iconBusiness3,
        heading: 'BESS system performance maintenance',
        bulletPoint: ['Charging/discharging efficiency', 'Operating rate', 'Battery capacity'],
    },
    {
        id: 4,
        imageUrl: iconBusiness4,
        heading: 'Rapid incident response and handling',
        bulletPoint: ['Leverage Continum solar network', 'Emergency dispatch and immediate recovery',],
    },

]

const relatedArray = [
    {
        id: 1,
        imageUrl: iconRelated5,
        heading: 'VPP-based Power Trading',
        text: 'Power trading service for KPX power market and RE100 customers based on renewable energy collective resource (VPP)',
    },
    {
        id: 2,
        imageUrl: iconRelated6,
        heading: 'Global O&M',
        text: "The best O&M service in the global solar market with Hanwha Group's solar and ESS business capabilities and IT technologies",
    },
]

const BusinessPage = ({header}) => {
    
    return (
        <BuisinessContainer>
            <Header header={header}/>
            <UpperText>We provide outstanding O&M service to the global solar market based on Continum Group's solar and BESS business capabilities and IT technologies</UpperText>
            <TextHeading title={'Total O&M Solution'}/>
            <TextCss>A group of experts with global 1GW O&M operation experience provides meticulous and systematic total O&M services</TextCss>
            <StoryContainer>
                {storyArray.map(el => <StoryNews story={el} key={el.id}/>)}
            </StoryContainer>
            <BessContainer>
                <TextHeading title={'BESS O&M'}/>
                <TextCss>Continum ranked No.1 in BESS O&M capacity, maintains Bess in optimal condition based on global operation experience and the know-how of professional personnel.</TextCss>
                <CardContainer>
                    {bessArray.map(el => <BessCard props={el} key={el.id}/>)}                
                </CardContainer>
            </BessContainer>
            <RelatedContainer>
                <TextHeading title={'Related business'}/>
                <TextCss>The integrated control center of Hanwha Convergence remotely monitors the power plant 24 hours a day and diagnose its operating status and performance. Through this, we organically collaborate with the field to optimize power generation performance and maximize asset value.</TextCss>
                <RelatedCardContainer>
                    {relatedArray.map(el => <RelatedCard key={el.id} props={el}/>)}
                </RelatedCardContainer>
            </RelatedContainer>
        </BuisinessContainer>
    )
}

export default BusinessPage;