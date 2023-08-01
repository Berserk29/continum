import {
Headline1Home,
Headline1Header,
Headline2,
Headline3,
Headline4,
Headline5,
Headline6,
Text1,
Text2,
Text3,
Text4,
Text5,
TextTable,
TextHome,
SpanOrange,
SpanGrey,
FooterHeading,
FooterLink,
Link,
} from "./typo.style";

export const TypoType = {
    Headline1Home: 'Headline1Home',
    Headline1Header: 'Headline1Header',
    Headline2: 'Headline2',
    Headline3: 'Headline3',
    Headline4: 'Headline4',
    Headline5: 'Headline5',
    Headline6: 'Headline6',
    Text1: 'Text1',
    Text2: 'Text2',
    Text3: 'Text3',
    Text4: 'Text4',
    Text5: 'Text5',
    TextHome: 'TextHome',
    TextTable: 'TextTable',
    SpanOrange: 'SpanOrange',
    SpanGrey: 'SpanGrey',
    FooterHeading: 'FooterHeading',
    FooterLink: 'FooterLink',
    Link: 'Link',
}

const Typo = ({children, type, textColor, headingColor, linkColor}) => {

    const TypoChoice = () => {
        if(type === 'Headline1Home') return <Headline1Home color={headingColor}>{children}</Headline1Home>
        if(type === 'Headline1Header') return <Headline1Header color={headingColor}>{children}</Headline1Header>
        if(type === 'Headline2') return <Headline2 color={headingColor}>{children}</Headline2>
        if(type === 'Headline3') return <Headline3 color={headingColor}>{children}</Headline3>
        if(type === 'Headline4') return <Headline4 color={headingColor}>{children}</Headline4>
        if(type === 'Headline5') return <Headline5 color={headingColor}>{children}</Headline5>
        if(type === 'Headline6') return <Headline6 color={headingColor}>{children}</Headline6>
        if(type === 'Text1') return <Text1 color={textColor}>{children}</Text1>
        if(type === 'Text2') return <Text2 color={textColor}>{children}</Text2>
        if(type === 'Text3') return <Text3 color={textColor}>{children}</Text3>
        if(type === 'Text4') return <Text4 color={textColor}>{children}</Text4>
        if(type === 'Text5') return <Text5 color={textColor}>{children}</Text5>
        if(type === 'TextHome') return <TextHome color={textColor}>{children}</TextHome>
        if(type === 'TextTable') return <TextTable color={textColor}>{children}</TextTable>
        if(type === 'SpanOrange') return <SpanOrange>{children}</SpanOrange>
        if(type === 'SpanGrey') return <SpanGrey>{children}</SpanGrey>
        if(type === 'FooterHeading') return <FooterHeading color={headingColor}>{children}</FooterHeading>
        if(type === 'FooterLink') return <FooterLink color={linkColor}>{children}</FooterLink>
        if(type === 'Link') return <Link color={linkColor}>{children}</Link>
    }

    return (
        <div> 
            {TypoChoice()} 
        </div>
    )
}

export default Typo; 