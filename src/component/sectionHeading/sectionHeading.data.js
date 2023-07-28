import { TypoType } from "../typo/typo.component"

// INFO titleTop, titleBottom, titleType, text, textType, textMaxWidth, span , viewBtn, alignItems, isBecomeOne

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
    titleBottom: 'to protect human-beings and our planet.',
    titleType: TypoType.Title3_B,
    alignItems: 'center',
    isBecomeOne: true,
}