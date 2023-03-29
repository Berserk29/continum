import Header from "../../component/header/header.component"
import { AboutContainer, UpperText } from "./aboutPage.style";

import Card from "../../component/card/card.component";

import AboutImage1 from '../../assets/about/aboutus_img_01.png'
import AboutImage2 from '../../assets/about/aboutus_img_02.png'
import AboutImage3 from '../../assets/about/aboutus_img_03.png'

const cardArray = [
    {
        id: 1,
        imageFirst: true,   
        imageUrl: AboutImage1,
        heading: "Opening the future of smart industrial sites by converging OT and IT technologies",
        text: "Continum enhances customer's competitiveness by implementing a smart factory where facilities and machines independently exchange information, monitor all integrated processes, and automatically control them."
    },
    {
        id: 2,
        imageFirst: false,
        imageUrl: AboutImage2,
        heading: "Presenting realistic alternatives in the carbon-neutral era by supplying green energy",
        text: "Continum configures and operates optimal renewable energy collective resource(VPP,virtual power plant),contributing to grid stability and maximizing customer profits through power trading and RE100 solutions based on power generation forecasting.",
    },
    {
        id: 3,
        imageFirst: true,
        imageUrl: AboutImage3,
        heading: "Creating new value for customers through continuous R&D",
        text: "Continum enhances customer's competitiveness by implementing a smart factory where facilities and machines independently exchange information, monitor all integrated processes, and automatically control them.",
    }
]

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