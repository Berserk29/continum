import { CardContainer, HeadingCard, ImageCard, TextCard, TextContainer } from "./relatedCard.style";


const RelatedCard = ({props}) => {
    const {imageUrl, heading, text} = props;
    return (
        <CardContainer>
            <ImageCard src={imageUrl}/>
            <TextContainer>
                <HeadingCard>{heading}</HeadingCard>
                <TextCard>{text}</TextCard>
            </TextContainer>
        </CardContainer>
    )
}

export default RelatedCard;