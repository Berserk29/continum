import { 
    CardContainer,
    HeadingCard,
    ImageCard,
    TextCard,
    TextContainer
} from "./infoCard.style";



const InfoCard = ({props, border = false, colorWhite = false}) => {
    const {imageUrl, heading, text} = props;

    const borderOn = () => {
        if(!border) return;
        return {border: '1px solid var(--color-grey-light-2)'}
    }

    return (
        <CardContainer style={borderOn()}>
            <ImageCard src={imageUrl}/>
            <TextContainer>
                <HeadingCard>{heading}</HeadingCard>
                <TextCard>{text}</TextCard>
            </TextContainer>
        </CardContainer>
    )
}

export default InfoCard;