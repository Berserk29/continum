import Header from "../../component/header/header.component";
import TextHeading from "../../component/textHeading/textHeading.component";
import InfoCard from "../../component/infoCard/infoCard.component";
import { EthicalContainer, SubstainContainer, TextCss } from "./sustainabilityPage.style";

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

const SustainabilityPage = ({header}) => {    
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
        </div>
    )
}

export default SustainabilityPage;