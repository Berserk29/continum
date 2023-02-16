import Header from "../../component/header/header.component";
import TextHeading from "../../component/textHeading/textHeading.component";
import InfoCard from "../../component/infoCard/infoCard.component";

import useMediaQuery from "../../helper/useMediaQuery";

import { 
    EthicalContainer,
    Container,
    HowToReportContainer,
    SubstainContainer,
    TextCss,
    FlexCenter,
} from "./sustainabilityPage.style";

import substainImg1 from '../../assets/sustainability/sustainability_icon_01.png'
import substainImg2 from '../../assets/sustainability/sustainability_icon_02.png'
import substainImg3 from '../../assets/sustainability/sustainability_icon_03.png'
import substainImg4 from '../../assets/sustainability/sustainability_icon_04.png'
import substainImg5 from '../../assets/sustainability/sustainability_icon_05.png'
import substainImg6 from '../../assets/sustainability/sustainability_icon_06.png'

const EthicalArray = [
    {
        id: 1,
        imageUrl: substainImg1,
        heading: 'For customers',
        text: 'Customer satisfaction and trust from customers are top priority.',
    },
    {
        id: 2,
        imageUrl: substainImg2,
        heading: 'Responsibility to society',
        text: "Actively contribute to the nation's and society's sound development and environmental preservation.",
    },
    {
        id: 3,
        imageUrl: substainImg3,
        heading: 'Competitors and suppliers',
        text: 'Respect the principle of free competition and take the lead in developing a fair and sound industry.',
    },
    {
        id: 4,
        imageUrl: substainImg4,
        heading: 'Responsibility to employees',
        text: 'Respect the human dignity of all company members and strive to improve the quality of life.',
    },
]

const reportArray = [
    {
        id: 1,
        imageUrl: substainImg5,
        heading: 'Post',
        text: '100 Overlook Center, Princeton, NJ 08540 United States',
    },
    {
        id: 2,
        imageUrl: substainImg6,
        heading: 'E-mail',
        text: 'ethics.cvg@continum.com',
    },

]

const reportTypeArray = [
    {
        id: 1,
        heading: 'Receiving rewards from stakeholders',
        text: 'Money, recreation and entertainment, porvision of convenience, borrowing, debt repayment, guarantee, money loan, guarantee for the future'
    },
    {
        id: 2,
        heading: 'Receiving rewards from stakeholders',
        text: 'Money, recreation and entertainment, porvision of convenience, borrowing, debt repayment, guarantee, money loan, guarantee for the future'
    },
]



const SustainabilityPage = ({header}) => {
    const isBigScreen = useMediaQuery('(min-width: 2000px)')
    
    return (
        <div>
            <Header header={header}/>
            <SubstainContainer>
                <div>
                 <TextHeading title={'Ethical management'}/>
                 <TextCss>Continum put ethical management based on integrity in all management activities as his top priority and seeks to ensure that all employees perform their duties transparently, fairly and rationally</TextCss>
                </div>
                <EthicalContainer>
                    {EthicalArray.map(el => <InfoCard key={el.id} props={el} border={true}/>)}
                </EthicalContainer>
            </SubstainContainer>
            <Container>
                <TextHeading title={'Report type'} textCenter={false}/>


            </Container>
            <Container>
                <TextHeading title={'How to report'} textCenter={ isBigScreen ? true : false}/>
                <FlexCenter>
                <HowToReportContainer>
                    {reportArray.map(el => <InfoCard key={el.id} props={el} border={true} colorWhite={true}/>)}
                </HowToReportContainer>
                </FlexCenter>
            </Container>

        </div>
    )
}

export default SustainabilityPage;