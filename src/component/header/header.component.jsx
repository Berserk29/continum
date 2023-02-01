import { Fragment } from "react";

import Navigation from "../navigation/navigation.component";

import { 
    HeaderContainerHome,
    HeaderContainerOther,
    TitleHeaderOther,
    TitleHeaderHome,
    HeaderMain,
    HeaderSub,
} from "./header.style";


const Header = ({header}) => {
const {url, main, sub} = header;

    return(
        <Fragment>
            {   sub ?
                <HeaderContainerHome style={{backgroundImage: `url(${url})`}}>
                        <Navigation/>
                        <TitleHeaderHome>
                            <HeaderMain>{main}</HeaderMain>
                            <HeaderSub>{sub}</HeaderSub>
                        </TitleHeaderHome> 
                </HeaderContainerHome>
                    :
                <HeaderContainerOther style={{backgroundImage: `url(${url})`}}>
                    <Navigation/>
                    <TitleHeaderOther>{main}</TitleHeaderOther>
                </HeaderContainerOther>
            }
        </Fragment>
    )
}

export default Header;