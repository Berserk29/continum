import {BulletContainer, BulletLi, ContentContainer, HeadingCard, ImageBusiness } from "./infoCard.style";


const InfoCard = ({props}) => {
    const {imageUrl, heading, bulletPoint} = props;
    return (
        <ContentContainer>
            <ImageBusiness src={imageUrl}/>
            <HeadingCard>{heading}</HeadingCard>
            <BulletContainer>
                {bulletPoint.map((el,i) => <BulletLi key={i}>{el}</BulletLi>)}
            </BulletContainer>
        </ContentContainer>
    )
}

export default InfoCard;