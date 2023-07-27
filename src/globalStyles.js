import { createGlobalStyle } from "styled-components";

import gmarketBold from './assets/font/gmarketsansbold-webfont.woff2'
import notoSansBold from './assets/font/notosans-bold-webfont.woff2'
import notoSansMedium from './assets/font/notosans-medium-webfont.woff2'

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Gmarket Sans';
        src: url(${gmarketBold}) format('woff2');
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: 'Noto Sans';
        src: url(${notoSansBold}) format('woff2');
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: 'Noto Sans';
        src: url(${notoSansMedium}) format('woff2');
        font-weight: 400;
        font-style: normal;
    }
`

export default GlobalStyles;