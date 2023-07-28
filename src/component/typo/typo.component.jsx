import {
    Title1,
    Title1Black,
    Title2,
    Title3,
    Title4,
    Title5,
    TitleNoto1,
    OrangeSpan,
    OrangeSpanHover,
    OrangeSpan2,
    Text1,
    Text2,
    Text3,
    Text4,
    Text5,
} from "./typo.style";

export const TypoType = {
    Title1_W: 'Title1_W',
    Title1_B: 'Title1_B',
    Title2_W: 'Title2_W',
    Title3_B: 'Title3_B',
    Title4_B: 'Title4_B',
    Title5_B: 'Title5_B',
    TitleNoto1_B: 'TitleNoto1_B',
    Span1_O: 'Span1_O',
    Span1_G: 'Span1_G',
    Span2_O: 'Span2_O',
    Text1_B: 'Text1_B',
    Text2_W: 'Text2_W',
    Text3_B: 'Text3_B',
    Text4_G: 'Text4_G',
    Text5_B: 'Text5_B',
}

const Typo = ({children, type}) => {

    const TypoChoice = () => {
        if(type === 'Title1_W') return <Title1>{children}</Title1>
        if(type === 'Title1_B') return <Title1Black>{children}</Title1Black>
        if(type === 'Title2_W') return <Title2>{children}</Title2>
        if(type === 'Title3_B') return <Title3>{children}</Title3>
        if(type === 'Title4_B') return <Title4>{children}</Title4>
        if(type === 'Title5_B') return <Title5>{children}</Title5>
        if(type === 'TitleNoto1_B') return <TitleNoto1>{children}</TitleNoto1>
        if(type === 'Span1_O') return <OrangeSpan>{children}</OrangeSpan>
        if(type === 'Span1_G') return <OrangeSpanHover>{children}</OrangeSpanHover>
        if(type === 'Span2_O') return <OrangeSpan2>{children}</OrangeSpan2>
        if(type === 'Text1_B') return <Text1>{children}</Text1>
        if(type === 'Text2_W') return <Text2>{children}</Text2>
        if(type === 'Text3_B') return <Text3>{children}</Text3>
        if(type === 'Text4_G') return <Text4>{children}</Text4>
        if(type === 'Text5_B') return <Text5>{children}</Text5>
    }

    return (
        <div> 
            {TypoChoice()} 
        </div>
    )
}

export default Typo; 