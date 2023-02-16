import { Fragment } from "react";
import { 
    CardContainer,
    HeadingCard,
    ImageCard,
    TextCard,
    TextContainer,
    WhiteCardContainer,
    HeadingWhiteCard,
    TextWhiteCard,
} from "./infoCard.style";



const InfoCard = ({props, border = false, colorWhite = false}) => {
    const {imageUrl, heading, text} = props;

    const borderOn = () => {
        if(!border) return;
        return {border: '1px solid var(--color-grey-light-2)'}
    }

    return (
        <Fragment>
            {
                !colorWhite ?
            <CardContainer style={borderOn()}>
                <ImageCard src={imageUrl}/>
                <TextContainer>
                    <HeadingCard>{heading}</HeadingCard>
                    <TextCard>{text}</TextCard>
                </TextContainer>
            </CardContainer>
            :
            <WhiteCardContainer style={borderOn()}>
                <ImageCard src={imageUrl}/>
                <TextContainer>
                    <HeadingWhiteCard>{heading}</HeadingWhiteCard>
                    <TextWhiteCard>{text}</TextWhiteCard>
                </TextContainer>
            </WhiteCardContainer>
            }
        </Fragment>
    )
}

export default InfoCard;