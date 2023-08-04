import { Fragment } from "react";

import { 
    HeaderContainerHome,
    HeaderContainerOther,
    TitleHeaderOther,
    TitleHeaderHome,
    Mouse,
} from "./header.style";

import Navigation from "../navigation/navigation.component";
import SectionHeading from '../sectionHeading/sectionHeading.component'
import Typo, { TypoType } from "../typo/typo.component";
import {markerObject1} from '../marker/marker.data'
import Marker from '../marker/marker.component'

import { headingHome01 } from "../sectionHeading/sectionHeading.data";

const Header = ({header}) => {
const {imageUrl, main} = header;

    return(
        <Fragment>
            {   !main ?
                <HeaderContainerHome style={{backgroundImage: `url(${imageUrl})`}}>
                        <Navigation/>
                        <TitleHeaderHome>
                            <SectionHeading props={headingHome01}/>
                        </TitleHeaderHome>
                        <Marker props={markerObject1}/>
                        <Mouse /> 
                </HeaderContainerHome>
                    :
                <HeaderContainerOther style={{backgroundImage: `url(${imageUrl})`}}>
                    <Navigation/>
                    <TitleHeaderOther>
                        <Typo type={TypoType.Headline1Header}>{main}</Typo>
                    </TitleHeaderOther>
                </HeaderContainerOther>
            }
        </Fragment>
    )
}

export default Header;