import { useNavigate, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

import { FlexContainer, LinkCss } from "./footerLink.style";

import Typo, { TypoType } from "../typo/typo.component";

const FooterLink = ({props}) => {
    const { path, title, linkName } = props;
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
                <LinkCss onClick={navigateHandler}  color='var(--color-white-opa40)'>{title}</LinkCss>
                :
                <Typo type={TypoType.HeadlineFooter}>{title}</Typo>
            }
            { !isMobile && 
                <FlexContainer gap={[1.9, 1.6]}>
                    {linkName.map((el,i) => <LinkCss onClick={navigateHandler} key={i} type={TypoType.LinkFooter}>{el}</LinkCss>)} 
                </FlexContainer>
            }
        </FlexContainer>
    )
}

export default FooterLink;