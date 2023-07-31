import { TypoType } from "../typo/typo.component"

// INFO titleTop, titleBottom, titleType, text, textType, textMaxWidth, span , viewBtn, alignItems, isBecomeOne,
// INFO modifiedGap (num) -> [isTablet, isMobile]  modifiedAlign (start,end,center) --> [isTablet, isMobile]

// TODO SOME OF THE OBJECT WILL HAVE MOTION VARIANT

///////// HOMEPAGE HEADING

export const headingHome01 = {
    titleTop: 'The innovation pioneer',
    titleBottom: 'for a sustainable tomorrow',
    titleType: TypoType.Title1_W,
    text: 'We think the future with our technology',
    textType: TypoType.Text2_W,
    alignItems: 'center',
    isBecomeOne: true,
}

export const headingHome03 = {
    span: 'News & media',
    titleTop: 'Newsroom',
    titleBottom: 'of Continum',
    titleType: TypoType.Title1_B,
    viewBtn: '/media',
    alignItems: 'start',
    modifiedGap: [3.2 , 4],
}

export const headingHome04 = {
    span: 'sustainable management',
    titleTop: 'Make variety effort',
    titleBottom: 'in every area',
    titleType: TypoType.Title1_W,
    text: 'As a member of the international community, we will continue to make great strides to rise as the global top leader in the environmental safety and health',
    textType: TypoType.Text2_W,
    textMaxWidth: '48rem',
    viewBtn: '/esg',
    alignItems: 'center',
    isBecomeOne: true,
}

///////// ABOUTPAGE HEADING

export const headingAbout01 = {
    titleTop: 'We create sustainable technologies',
    titleBottom: 'to protect human-beings and our planet',
    titleType: TypoType.Title3_B,
    alignItems: 'center',
    isBecomeOne: true,
    modifiedAlign: ['center','start'],
}

//////// BUSINESSPAGE HEADING

export const headingBu01 = {
    titleTop: 'We discover untapped opportunities',
    titleBottom: 'for future generations in uncharted territories',
    titleType: TypoType.Title3_B,
    alignItems: 'center',
    isBecomeOne: true,
    modifiedAlign: ['center','start'],
}

// \n is use with Css white-space: pre-line;  -> <br/>
export const headingBu02 = {
    titleTop: 'Our planet, our space',
    titleType: TypoType.Title4_B,
    text: "We lead all aspects of Canada's satellite industry, \n from satellites, telecommunications and the supply of satellite services.",
    textType: TypoType.Text1_B,
    alignItems: 'center',
}

// TODO CHANGING THE TEXT BECAUSE SAME WITH THE ONE UPPER
export const headingBu03 = {
    titleTop: 'Exploration for maritime',
    titleType: TypoType.Title4_B,
    text: "We lead all aspects of Canada's satellite industry, \n from satellites, telecommunications and the supply of satellite services.",
    textType: TypoType.Text1_B,
    alignItems: 'center',
}

export const headingBu04 = {
    titleTop: 'New space era',
    titleType: TypoType.Title4_B,
    text: "Problems The era of new space is approaching",
    textType: TypoType.Text1_B,
    alignItems: 'center',
}

//////// ESGPAGE HEADING

export const headingEsg01 = {
    titleTop: 'We will create a sustainable future',
    titleBottom: 'through transparent communication',
    titleType: TypoType.Title3_B,
    text: "We will continue to establish and upgrade its ESG \n governance system to respond strategically to changes in the management environment",
    textType: TypoType.Text1_B,
    alignItems: 'center',
    isBecomeOne: true,
}