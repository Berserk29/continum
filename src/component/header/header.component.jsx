import { Fragment } from "react";

import video from '../../assets/video/home_video.mp4'

import { 
    HeaderContainerHome,
    HeaderContainerOther,
    TitleHeaderOther,
    TitleHeaderHome,
    VideoCss,
    Mouse,
} from "./header.style";

import Navigation from "../navigation/navigation.component";
import SectionHeading from '../sectionHeading/sectionHeading.component'
import Typo, { TypoType } from "../typo/typo.component";
import {markerObject1} from '../marker/marker.data'
import Marker from '../marker/marker.component'
import HeaderSelecter from "../headerSelecter/headerSelecter.component";

import { headingHome01 } from "../sectionHeading/sectionHeading.data";

const Header = ({props}) => {
const {imageUrl, heading} = props;

// TODO HAVING THE FIRST FRAME OF THE VIDEO AS THE POSTER IN VIDEOCSS

    return(
        <Fragment>
            {   !heading ?
                <HeaderContainerHome >
                        <Navigation/>
                        <VideoCss autoPlay muted loop poster="">
                            <source src={video} type="video/mp4"/>
                        </VideoCss>
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
                        <Typo type={TypoType.Headline1Header}>{heading}</Typo>
                    </TitleHeaderOther>

                    {/* TODO THE HEADERMARKER */}
                    <HeaderSelecter props={props}/>

                </HeaderContainerOther>
            }
        </Fragment>
    )
}

export default Header;