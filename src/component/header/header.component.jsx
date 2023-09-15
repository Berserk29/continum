import { Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

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
import Marker from '../marker/marker.component'
import HeaderSelecter from "../headerSelecter/headerSelecter.component";

import video from '../../assets/video/home_video.mp4'
import { markerObject1 } from '../marker/marker.data'
import { headingHome01 } from "../sectionHeading/sectionHeading.data";

const Header = ({props}) => {
    const {imageUrl, heading} = props;
    const isMobile = useMediaQuery(mediaQuery.useMobile)



    return(
        <Fragment>
            {   !heading ?
                <HeaderContainerHome >
                        <Navigation/>
                        <VideoCss autoPlay muted loop poster={imageUrl}>
                            <source src={video} type="video/mp4"/>
                        </VideoCss>
                        <TitleHeaderHome>
                            <SectionHeading props={headingHome01}/>
                        </TitleHeaderHome>
                        <Marker props={markerObject1}/>
                        <Mouse /> 
                </HeaderContainerHome>
                    :
                <HeaderContainerOther imageUrl={imageUrl}>
                    <Navigation/>
                    <TitleHeaderOther>
                        <Typo type={TypoType.Headline1Header}>{heading}</Typo>
                    </TitleHeaderOther>
                    {!isMobile && <HeaderSelecter props={props}/>}
                </HeaderContainerOther>
            }
        </Fragment>
    )
}

export default Header;