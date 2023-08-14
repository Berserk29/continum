import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";
import { useNavigate, useLocation } from "react-router-dom";

import { FlexContainer } from "./footerLink.style";

import Typo, { TypoType } from "../typo/typo.component";

const FooterLink = ({props}) => {
    const {path, title, linkName} = props;
    const isMobile = useMediaQuery(mediaQuery.useMobile);
    const navigate = useNavigate();
    const location = useLocation();
    
    const navigateHandler = () => {
        if(location.pathname === path) return window.scrollTo(0,0);
        navigate(path);
    };

    return (
        <FlexContainer>
            { isMobile ?
                <div onClick={navigateHandler}>
                    <Typo type={TypoType.LinkFooter} linkColor='var(--color-white-opa40)'>{title}</Typo>
                </div>
                :
                <Typo type={TypoType.HeadlineFooter}>{title}</Typo>
            }
            { !isMobile && 
                <FlexContainer gap={[1.9, 1.6]}>
                    {linkName.map((el,i) => <div onClick={navigateHandler} key={i}><Typo type={TypoType.LinkFooter}>{el}</Typo></div>)} 
                </FlexContainer>
            }
        </FlexContainer>
    )
}

export default FooterLink;