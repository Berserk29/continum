import {
    AboutImage,
    CardContainer,
    CardHeading,
    CardText,
    TextContainer,
} from "./card.style";

const Card = ({card})=> {
const {imageFirst, imageUrl, heading, text} = card;

    return (
        <CardContainer>
                { imageFirst ? <AboutImage src={imageUrl}/> : ''}
                <TextContainer>
                    <CardHeading>{heading}</CardHeading>
                    <CardText>{text}</CardText>
                </TextContainer>
                { !imageFirst ? <AboutImage src={imageUrl}/> : ''}
        </CardContainer>
    )
}

export default Card;