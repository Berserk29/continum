import { Fragment } from "react";

import Navigation from "../navigation/navigation.component";

import { 
    HeaderContainerHome,
    HeaderContainerOther,
    TitleHeaderOther,
    TitleHeaderHome,
    HeaderMain,
    HeaderSub,
    Mouse,
} from "./header.style";


const Header = ({header}) => {
const {imageUrl, main, sub} = header;

    return(
        <Fragment>
            {   sub ?
                <HeaderContainerHome style={{backgroundImage: `url(${imageUrl})`}}>
                        <Navigation/>
                        <TitleHeaderHome>
                            <HeaderMain>{main}</HeaderMain>
                            <HeaderSub>{sub}</HeaderSub>
                        </TitleHeaderHome>
                        <Mouse /> 
                </HeaderContainerHome>
                    :
                <HeaderContainerOther style={{backgroundImage: `url(${imageUrl})`}}>
                    <Navigation/>
                    <TitleHeaderOther>{main}</TitleHeaderOther>
                </HeaderContainerOther>
            }
        </Fragment>
    )
}

export default Header;