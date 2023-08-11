import * as Styled from './typo.style'

export const TypoType = {
    Headline1Home: 'Headline1Home',
    Headline1Header: 'Headline1Header',
    Headline2: 'Headline2',
    Headline3: 'Headline3',
    Headline4: 'Headline4',
    Headline5: 'Headline5',
    Headline6: 'Headline6',
    Headline7: 'Headline7',
    HeadlineTable: 'HeadlineTable',
    HeadlineFooter: 'HeadlineFooter',
    Text1: 'Text1',
    Text2: 'Text2',
    Text3: 'Text3',
    Text4: 'Text4',
    Text5: 'Text5',
    Text6: 'Text6',
    TextHome: 'TextHome',
    TextTable: 'TextTable',
    SpanOrange: 'SpanOrange',
    Span: 'Span',
    LinkFooter: 'LinkFooter',
    Link: 'Link',
    LinkDrop: 'LinkDrop',
}

const Typo = ({children, type, textColor, headingColor, linkColor}) => {
    const StyledComponent = Styled[TypoType[type]];

    return (
        <StyledComponent
            color={type.startsWith('Headline') ? headingColor : type.startsWith('Text') ? textColor : linkColor}
        >
        {children}
        </StyledComponent>
    )
}

export default Typo; 